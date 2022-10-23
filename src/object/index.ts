import { TDefaultObject } from '../../types';

export function defaults<T, K>(this: T, defs: K): TDefaultObject<T, K> {
    return { ...defs, ...this };
}

export function predetermines<T, K>(this: T, defs: K): TDefaultObject<T, K> {
    return { ...this, ...defs };
}