export function hasDecimals() {
    /* @ts-ignore */
    return this % 1 > 0;
}
export function isBetween(min, max) {
    return this >= min && this <= max;
}
export function close(min, max) {
    if (this < min)
        return min;
    else if (this > max)
        return max;
    return this;
}
export function staticRandom(param) {
    param.min ||= 0;
    param.max ||= Number.MAX_SAFE_INTEGER;
    return Math.random() * (param.max - 1) + param.min;
}
export function times(cb, ...args) {
    if (this <= 0)
        return;
    for (let i = 0; i < this; i++)
        cb(...args.map((arg) => (arg === "$" ? i : arg)));
}
//# sourceMappingURL=index.js.map