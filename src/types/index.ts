import { ObjectSearch, SplitType } from "../enums";
import {
  CircleElement,
  ObjectSearchResult,
  PatchFilterOptions,
  RotateOptions,
} from "../interfaces";

export type Indexable<T extends object> = {
  [K in keyof T]: T[K];
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export declare type DeepPartial<T extends object> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P] extends undefined | null
    ? any
    : T[P];
};

export type DiscriminateResult<T> = { [key in "true" | "false"]: T[] };
export type FillerResult = { continue: boolean; push?: boolean; value: any };
export type TDefaultObject<T, K> = Partial<T> & K;

declare global {
  interface Array<T> {
    /**
     * @returns {number | null} The array length minus one. ```null``` if empty array
     * @example
     * [1].lastIndex();
     * // returns 0;
     *
     * [1, 2].lastIndex();
     * // returns 1;
     *
     * [].lastIndex();
     * // returns null;
     */
    lastIndex(): number | null;

    /**
     * @returns {T} An object with circular reference of items
     */
    isEmpty(): boolean;

    /**
     * @returns {CircleElement<T> | null} An object with circular reference of items. ```null``` if empty array
     */
    circle(): CircleElement<T> | null;

    /**
     * @returns {T} A random element within the array
     */
    random(): T;

    /**
     * @deprecated Use Array.prototype.from instead.
     */
    at2(index: number): T;

    /**
     * Return the item of a specific index.
     * - If the index is greater than array's size, the function will start from the begining of the array.
     * - If the index is below than zero, the function will start from the end of the array.
     *
     * @param {number} index - An index
     * @returns {T | undefined} The item on ```index``` position. ```undefined``` if empty array
     */
    from(index: number): T | undefined;

    /**
     * Fills an array by a callback.
     *
     * @param {function} filler - The callback that will be called to fill up the array
     * @returns {T[]} The filled array. Not a copy
     * @example
     *
     * [].fillWith((index, array) => ({continue: index < 49, value: index, push: true}));
     * // Returns [
     *   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
     *   11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
     *   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
     *   33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
     *   44, 45, 46, 47, 48, 49
     * ]
     */
    fillWith(filler: (index: number, array: T[]) => FillerResult): T[];

    /**
     * Rotates an array.
     *
     * @param {T[]} this - The array to rotate
     * @param {RotateOptions} optionsOrSteps - The rotation options
     * @returns {T[]} A rotated copy of the array
     * @example
     * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     * array.rotate();
     * // Returns [9, 1, 2, 3, 4, 5, 6, 7, 8]
     *
     * array.rotate({steps: 2});
     * // Returns [8, 9, 1, 2, 3, 4, 5, 6, 7]
     *
     * const rotable = ["a", 0, "c", 0, "e", 0, "g", 0, "i", 0];
     * rotable.rotate({
     *   selector: ({ item }) => item !== 0
     * });
     * // Returns ["i", 0, "a", 0, "c", 0, "e", 0, "g", 0]
     *
     * rotable.rotate({
     *   steps: -1,
     *   selector: ({ item }) => item !== 0
     * });
     * // Returns ["c", 0, "e", 0, "g", 0, "i", 0, "a", 0]
     */
    rotate<T>(this: T[], optionsOrSteps?: RotateOptions<T> | number): T[];

    /**
     * Split an array.
     *
     * @param {T[]} this - The array to split
     * @param {number} steps - Depending by ```type``` parameter, the amount of sections to get
     * @param {SplitType} type - The split type
     * @returns {T[][]} An array filled with the divided array
     * @example
     * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     * array.split(1);
     * // Returns [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
     *
     *array.split(3);
     * // Returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
     *
     * array.split(2, SplitType.ExclusiveDivision);
     * // Returns [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
     *
     * array.split(2, SplitType.InclusiveDivision);
     * // Returns [[1, 2, 3, 4, 5], [6, 7, 8, 9]]
     */
    split<T>(this: T[], steps: number, type?: SplitType): T[][];

    /**
     *
     * @param {T[]} this - The array which elements will be discriminated
     * @param {function} filter - Function that will filter the items
     * @returns {DiscriminateResult<T>} An object with "true" and "false" members that are filled with the array items that passed the filter or not
     * @example
     * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     *
     * array.discriminate(item => item <= 5);
     * // Returns {true: [1, 2, 3, 4, 5], false: [6, 7, 8, 9]}
     */
    discriminate<T>(
      this: T[],
      filter: (item: T, index: number, array: T[]) => boolean
    ): DiscriminateResult<T>;
  }

  interface Number {
    isBetween(min: number, max: number): boolean;
    hasDecimals(): boolean;
    close(min: number, max: number): Number;
    times(this: Number, cb: (...args: any) => void, ...args: any): void;
  }

  interface ObjectConstructor {
    /**
     * @since 1.1.0
     *
     * Copies an object deeply.
     *
     * @param {object} object - The object that will be copied
     * @returns {object} A copy of the first object
     */
    clone<T extends object>(object: T): T;

    /**
     * @since 1.1.0
     *
     * Update the first object with the values of the second object.
     * The changes just happens over the existing fields.
     *
     * @param {object} firstObject - The object that will be updated
     * @param {object} secondObject - The object to use for the update of the firstObject
     * @param {function} [filter] - A function that help to choose which elements will be updated
     * @returns {object} An updated copy of the first object
     */
    patch<T extends object>(
      firstObject: T,
      secondObject: DeepPartial<T>,
      filter?: (options: PatchFilterOptions) => boolean
    ): T;

    /**
     * @since 1.1.0
     *
     * Creates an array from an object.
     * @param {object} object - The source object
     * @returns {Indexable<object>} A new array with the fields of the object
     */
    toArray<T extends object>(object: T): Indexable<T>;

    /**
     * @since 1.1.0
     *
     * Creates an object composed of the picked object properties.
     *
     * @param {object} object - The source object
     * @param {string[]} paths - The property paths to pick
     * @returns {Pick<object, string[]>} A new object with the choosen fields
     * @see https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc?permalink_comment_id=2366292#gistcomment-2366292
     */
    pick<T extends object, K extends keyof T>(
      object: T,
      paths: K[],
      deepClone?: boolean
    ): Pick<T, K>;

    /**
     * @since 1.1.18
     *
     * Search for a value or field in an object.
     *
     * @param {object} haystack - The object to search in
     * @param {string | number} needle - The value or field to search, if the needle is an string, a regex will be used
     * @returns {ObjectSearchResult | null} An object with the search result. ```null``` if not found
     * @example
     * const object = {
     *   name: "John",
     *   surname: "Doe",
     *   age: 30,
     *   address: {
     *     street: "Main Street",
     *     number: 1,
     *     city: "New York"
     *   }
     * };
     *
     * Object.search(object, "John");
     * // Returns {path: ["$", "name"], reference: object, field: "name", value: "John"}
     * 
     * Object.search(object, "/new york/i");
     * // Returns {path: ["$", "address", "city"], reference: object.address, field: "city", value: "New York"}
     * 
     * Object.search(object, "number", ObjectSearch.Field);
     * // Returns {path: ["$", "address", "number"], reference: object.address, field: "number", value: 1}
     */
    search(
      haystack: object,
      needle: string | number,
      method?: ObjectSearch
    ): ObjectSearchResult | null;
  }

  interface NumberConstructor {
    random(param: { min?: number; max?: number }): number;
  }

  interface String {
    /**
     * @since 1.1.16
     *
     * @param {string} this - The string to patch
     * @param {object} object - The object to use for the patch
     * @returns {string} A patched copy of the string.
     * @example
     * "Hello name".patch({name: "John"});
     * // Returns "Hello John"
     *
     * "Hello name".patch({name: "John", surname: "Doe"});
     * // Returns "Hello John"
     *
     * "My name is MY_nAME and i'm YEARS_OlD years old".patch({"/MY_NAME/i": "John", "/YEARS_OlD/i": 30});
     * // Returns "My name is John and i'm 30 years old"
     */
    patch(this: String, object: object): String;
  }
}
