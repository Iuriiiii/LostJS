export function toArray(object) {
    const entries = Object.entries(object);
    return entries.reduce((accumulator, [key, value]) => {
        accumulator[key] = value;
        return accumulator;
    }, []);
}
export function clone(object) {
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
/**
 * Set the values of the secondObject to the firstObject.
 *
 * @param firstObject The object to patch.
 * @param secondObject The object with the data to use in as patch.
 * @returns The patched firstObject's clone.
 */
export function patch(firstObject, secondObject) {
    const entries = Object.entries(firstObject);
    const result = clone(firstObject);
    if (!secondObject) {
        return firstObject;
    }
    for (const [key, value] of entries) {
        if (secondObject[key] === undefined) {
            continue;
        }
        if (typeof value === "object") {
            result[key] = patch(result[key], secondObject[key]);
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
export function pick(object, paths, deepClone = false) {
    return paths.reduce((accumulator, key) => {
        const fieldValue = object[key];
        const value = deepClone && typeof fieldValue === "object"
            ? clone(fieldValue)
            : fieldValue;
        accumulator[key] = value;
        return accumulator;
    }, {});
}
//# sourceMappingURL=index.js.map