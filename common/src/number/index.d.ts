export declare function hasDecimals(this: number): boolean;
export declare function isBetween(this: number, min: number, max: number): boolean;
export declare function close(this: number, min: number, max: number): Number;
export declare function staticRandom(param: {
    min?: number;
    max?: number;
}): number;
export declare function times(this: number, cb: (...args: any) => void, ...args: any): void;
