export interface Reference<T> {
    [key: string]: T;
}
export interface RotateSelectorOptions<T> {
    item: T;
    index: number;
    array: T[];
}
export interface PatchFilterOptions {
    key: string;
    value: unknown;
}
export interface RotateOptions<T> {
    /**
     * Rotate n```steps```.
     */
    steps?: number;
    /**
     * Use this callback to choose which items will be rotated.
     *
     * @param {RotateSelectorOptions} element - An object with the current element information.
     * @returns {boolean} True if the actual element will be rotated. Otherwise false.
     * @example
     * const array = [1, 2, 4, 5, 6, 7, 8, 9];
     * array.rotate({
     *  selector: ({item, index, array}) => index % 3 === 0
     * })
     */
    selector?: (element: RotateSelectorOptions<T>) => boolean;
}
export interface CircleElement<T> {
    isLast: boolean;
    isFirst: boolean;
    index: number;
    prev: CircleElement<T>;
    next: CircleElement<T>;
    value: T;
}
export interface ObjectElementReference {
    reference: object;
    name: string;
}
export interface ObjectSearchResult {
    path: string[];
    reference: unknown;
    field: string;
    value: string;
}
