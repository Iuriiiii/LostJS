import { DeepPartial, Indexable } from "../types";
export declare function toArray<T extends object>(object: T): Indexable<T>;
export declare function clone<T extends object>(object: T): T;
/**
 * Set the values of the secondObject to the firstObject.
 *
 * @param firstObject The object to patch.
 * @param secondObject The object with the data to use in as patch.
 * @returns The patched firstObject's clone.
 */
export declare function patch<T extends object>(firstObject: T, secondObject: DeepPartial<T>): T;
export declare function pick<T extends object, K extends keyof T>(object: T, paths: K[], deepClone?: boolean): Pick<T, K>;
