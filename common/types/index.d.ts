export interface ICircleElement<T> {
    isLast: boolean;
    isFirst: boolean;
    index: number;
    prev: ICircleElement<T>;
    next: ICircleElement<T>;
    value: T;
}
declare global {
    interface Array<T> {
        lastIndex(): number;
        isEmpty(): boolean;
        circle(): ICircleElement<T> | null;
        random(): T;
        at2(index: number): T;
    }
    interface Number {
        isBetween(min: number, max: number): boolean;
        hasDecimals(): boolean;
        close(min: number, max: number): Number;
    }
    interface NumberConstructor {
        random(param: {
            min?: number;
            max?: number;
        }): number;
    }
}
