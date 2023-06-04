"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.patch = exports.clone = exports.toArray = void 0;
function toArray(object) {
    const entries = Object.entries(object);
    return entries.reduce((accumulator, [key, value]) => {
        accumulator[key] = value;
        return accumulator;
    }, []);
}
exports.toArray = toArray;
function clone(object) {
    if (structuredClone) {
        return structuredClone(object);
    }
    const result = { ...object };
    for (const [key, value] of Object.entries(result)) {
        if (typeof value === "object") {
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
        if (secondObject[key] === undefined) {
            continue;
        }
        if (filter && !filter({ key, value })) {
            continue;
        }
        if (typeof value === "object") {
            result[key] = patch(result[key], secondObject[key], filter);
        }
        else {
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
//# sourceMappingURL=index.js.map