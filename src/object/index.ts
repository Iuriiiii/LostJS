import { PatchFilterOptions, Reference } from "../interfaces";
import { DeepPartial, Indexable } from "../types";

export function toArray<T extends object>(object: T): Indexable<T> {
  const entries = Object.entries(object);

  return entries.reduce((accumulator, [key, value]) => {
    accumulator[key] = value as any;
    return accumulator;
  }, []) as unknown as Indexable<T>;
}

export function clone<T extends object>(object: T): T {
  if (typeof structuredClone === "function") {
    return structuredClone(object);
  }

  const result: T = { ...object };

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object" && value !== null) {
      result[key] = clone(value);
    }
  }

  if (object instanceof Array) {
    return toArray(result) as T;
  }

  return result as T;
}

export function patch<T extends object>(
  firstObject: T,
  secondObject: DeepPartial<T>,
  filter?: (options: PatchFilterOptions) => boolean
): T {
  const entries = Object.entries(firstObject);
  const result: T = clone(firstObject);

  if (!secondObject) {
    return firstObject;
  }

  for (const [key, value] of entries) {
    if (secondObject[key] === undefined) {
      continue;
    }

    if (filter && !filter({ key, value })) {
      continue;
    }

    if (typeof value === "object") {
      result[key] = patch(result[key], secondObject[key]!, filter);
    } else {
      result[key] = secondObject[key];
    }
  }

  if (firstObject instanceof Array) {
    return toArray(result) as unknown as T;
  }

  return result as T;
}

export function pick<T extends object, K extends keyof T>(
  object: T,
  paths: K[],
  deepClone: boolean = false
): Pick<T, K> {
  return paths.reduce((accumulator, key) => {
    const fieldValue = object[key];
    const value =
      deepClone && typeof fieldValue === "object"
        ? clone(fieldValue as object)
        : fieldValue;
    (accumulator as Indexable<T>)[key] = value as T[K];

    return accumulator;
  }, {}) as Pick<T, K>;
}
