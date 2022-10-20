

export function hasDecimals(this: Number): boolean {
    /* @ts-ignore */
    return this % 1 > 0;
}

export function isBetween(this: Number, min: number, max: number): boolean {
    return this >= min && this <= max;
}

export function close(this: Number, min: number, max: number): Number {
    if (this < min)
        return min;
    else if (this > max)
        return max;

    return this;
}