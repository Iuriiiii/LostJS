import { ICircleElement } from '../../types';

export function lastIndex<T>(this: Array<T>) {
    return this.length === 0 ? 0 : this.length - 1;
}

export function isEmpty<T>(this: Array<T>): boolean {
    return this.length === 0;
}

export function circleFrom<T>(this: Array<T>): ICircleElement<T> | null {
    if (this.isEmpty())
        return null;

    /* @ts-ignore */
    const first: ICircleElement<T> = {};
    let item = first;

    for (let i = 0; i < this.length; i++) {
        item.isFirst = i === 0;
        item.isLast = i === this.lastIndex();
        item.index = i;
        item.value = this[i];
        /* @ts-ignore */
        item = item.next = { prev: item };
    }

    item.prev.next = first;
    first.prev = item.prev;

    return first;
};

export function random<T>(this: Array<T>): T {
    return this[Math.floor(Math.random() * this.length)];
};

