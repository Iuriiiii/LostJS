"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.pick = exports.patch = exports.clone = exports.toArray = void 0;
const enums_1 = require("../enums");
const utils_1 = require("../utils");
function toArray(object) {
    const entries = Object.entries(object);
    return entries.reduce((accumulator, [key, value]) => {
        // @ts-ignore
        accumulator[key] = value;
        return accumulator;
    }, []);
}
exports.toArray = toArray;
function clone(object) {
    if (typeof structuredClone === "function") {
        return structuredClone(object);
    }
    const result = { ...object };
    for (const [key, value] of Object.entries(object)) {
        if (typeof value === "object" && value !== null) {
            // @ts-ignore
            result[key] = clone(value);
        }
    }
    if (object instanceof Array) {
        return toArray(result);
    }
    return result;
}
exports.clone = clone;
function patch(firstObject, secondObject, filter) {
    const entries = Object.entries(firstObject);
    const result = clone(firstObject);
    if (!secondObject) {
        return firstObject;
    }
    for (const [key, value] of entries) {
        // @ts-ignore
        if (secondObject[key] === undefined) {
            continue;
        }
        if (filter && !filter({ key, value })) {
            continue;
        }
        if (typeof value === "object") {
            // @ts-ignore
            result[key] = patch(result[key], secondObject[key], filter);
        }
        else {
            // @ts-ignore
            result[key] = secondObject[key];
        }
    }
    if (firstObject instanceof Array) {
        return toArray(result);
    }
    return result;
}
exports.patch = patch;
function pick(object, paths, deepClone = false) {
    return paths.reduce((accumulator, key) => {
        const fieldValue = object[key];
        const value = deepClone && typeof fieldValue === "object"
            ? clone(fieldValue)
            : fieldValue;
        accumulator[key] = value;
        return accumulator;
    }, {});
}
exports.pick = pick;
function search(haystack, needle, method = enums_1.ObjectSearch.Value) {
    const stack = [{ reference: haystack, name: "$" }];
    const visited = new Set();
    const filter = typeof needle === "string" ? (0, utils_1.extractRegex)(needle) : needle;
    if (!filter) {
        return null;
    }
    while (stack.length) {
        const { reference, name } = stack.pop();
        if (visited.has(reference)) {
            continue;
        }
        visited.add(reference);
        for (const [key, value] of Object.entries(reference)) {
            const lens = method === enums_1.ObjectSearch.Field ? key : value;
            const typeOfLens = typeof lens;
            const typeOfNeedle = typeof needle;
            const typeOfValue = typeof value;
            if ([0, null, undefined].includes(lens) ||
                typeOfLens === "function" ||
                (typeOfLens !== typeOfNeedle && typeOfValue !== "object")) {
                continue;
            }
            else if ((typeOfLens === "string" && filter.test(lens)) ||
                (typeOfLens === "number" && lens === needle)) {
                return {
                    path: name.split("."),
                    reference,
                    field: key,
                    value: method === enums_1.ObjectSearch.Field ? value : lens,
                };
            }
            else if (value && typeOfValue === "object") {
                stack.push({ reference: value, name: name + "." + key });
            }
        }
    }
    return null;
}
exports.search = search;
//# sourceMappingURL=index.js.map