import { ICircleElement, TFillerResult } from '../../types';
export declare function lastIndex<T>(this: T[]): number;
export declare function isEmpty<T>(this: T[]): boolean;
export declare function circleFrom<T>(this: T[]): ICircleElement<T> | null;
export declare function random<T>(this: T[]): T | undefined;
/**
 * @deprecated
 * @param this
 * @param index
 * @returns The element in the position or undefinded if the array is empty.
 */
export declare function at2<T>(this: T[], index: number): T | undefined;
export declare function from<T>(this: T[], index: number): T | undefined;
export declare function fillWith<T>(this: T[], filler: (index: number, array: T[]) => TFillerResult): T[];
export declare function rotate<T>(this: T[], steps?: number, selector?: (item: T, index: number, array: T[]) => boolean): T[];
