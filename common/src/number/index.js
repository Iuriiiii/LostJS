"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = exports.staticRandom = exports.close = exports.isBetween = exports.hasDecimals = void 0;
function hasDecimals() {
    /* @ts-ignore */
    return this % 1 > 0;
}
exports.hasDecimals = hasDecimals;
function isBetween(min, max) {
    return this >= min && this <= max;
}
exports.isBetween = isBetween;
function close(min, max) {
    if (this < min)
        return min;
    else if (this > max)
        return max;
    return this;
}
exports.close = close;
function staticRandom(param) {
    param.min ||= 0;
    param.max ||= Number.MAX_SAFE_INTEGER;
    return Math.random() * (param.max - 1) + param.min;
}
exports.staticRandom = staticRandom;
function times(cb, ...args) {
    if (this <= 0)
        return;
    for (let i = 0; i < this; i++)
        cb(...args.map((arg) => (arg === "$" ? i : arg)));
}
exports.times = times;
//# sourceMappingURL=index.js.map