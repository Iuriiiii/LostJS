export interface ICircleElement<T> {
    isLast: boolean;
    isFirst: boolean;
    index: number;
    prev: ICircleElement<T>;
    next: ICircleElement<T>;
    value: T;
}
export declare type TFillerResult = {
    continue: boolean;
    push?: boolean;
    value: any;
};
export declare type TDefaultObject<T, K> = Partial<T> & K;
declare global {
    interface Array<T> {
        lastIndex(): number;
        isEmpty(): boolean;
        circle(): ICircleElement<T> | null;
        random(): T;
        /**
         * @deprecated Use Array.prototype.from instead.
         * @param this
         * @param index
         * @returns The element in the position or undefinded if the array is empty.
         */
        at2(index: number): T;
        from(index: number): T;
        fillWith(filler: (index: number, array: T[]) => TFillerResult): T[];
        rotate<T>(this: T[], steps: number, selector?: (item: T, index: number, array: T[]) => boolean): T[];
    }
    interface Number {
        isBetween(min: number, max: number): boolean;
        hasDecimals(): boolean;
        close(min: number, max: number): Number;
    }
    interface Object {
        defaults<T extends Object, K>(this: T, defs: K): TDefaultObject<T, K>;
        predetermines<T, K>(this: T, defs: K): TDefaultObject<T, K>;
    }
    interface NumberConstructor {
        random(param: {
            min?: number;
            max?: number;
        }): number;
    }
}
