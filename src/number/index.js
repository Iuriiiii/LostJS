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
//# sourceMappingURL=index.js.map