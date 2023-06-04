import { PatchFilterOptions } from "../interfaces";
import { DeepPartial, Indexable } from "../types";
export declare function toArray<T extends object>(object: T): Indexable<T>;
export declare function clone<T extends object>(object: T): T;
export declare function patch<T extends object>(firstObject: T, secondObject: DeepPartial<T>, filter?: (options: PatchFilterOptions) => boolean): T;
export declare function pick<T extends object, K extends keyof T>(object: T, paths: K[], deepClone?: boolean): Pick<T, K>;
