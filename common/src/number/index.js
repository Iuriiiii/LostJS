"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.isBetween = exports.hasDecimals = void 0;
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
//# sourceMappingURL=index.js.map