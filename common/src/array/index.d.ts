import { FillerResult, DiscriminateResult } from "../types";
import { SplitType } from "../enums";
import { CircleElement, RotateOptions } from "../interfaces";
export declare function lastIndex<T>(this: T[]): number | null;
export declare function isEmpty<T>(this: T[]): boolean;
export declare function circleFrom<T>(this: T[]): CircleElement<T> | null;
export declare function random<T>(this: T[]): T | undefined;
export declare function at2<T>(this: T[], index: number): T | undefined;
export declare function from<T>(this: T[], index: number): T | undefined;
export declare function fillWith<T>(this: T[], filler: (index: number, array: T[]) => FillerResult): T[];
export declare function rotate<T>(this: T[], optionsOrSteps?: RotateOptions<T> | number): T[];
export declare function split<T>(this: T[], steps: number, type?: SplitType): T[][];
export declare function discriminate<T>(this: T[], filter: (item: T, index: number, array: T[]) => boolean): DiscriminateResult<T>;
