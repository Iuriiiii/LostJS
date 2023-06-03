import { ICircleElement, TFillerResult } from '../../types';

export function lastIndex<T>(this: T[]) {
    return this.length === 0 ? 0 : this.length - 1;
}

export function isEmpty<T>(this: T[]): boolean {
    return this.length === 0;
}

export function circleFrom<T>(this: T[]): ICircleElement<T> | null {
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

export function random<T>(this: T[]): T | undefined {
    return this[Math.floor(Math.random() * this.length)];
};

/**
 * @deprecated
 * @param this 
 * @param index 
 * @returns The element in the position or undefinded if the array is empty.
 */
export function at2<T>(this: T[], index: number): T | undefined {
    return this.at(index % this.length);
}

export function from<T>(this: T[], index: number): T | undefined {
    return this.at(index % this.length);
}

export function fillWith<T>(this: T[], filler: (index: number, array: T[]) => TFillerResult): T[] {
    let i = 0, filleResult;

    do {
        filleResult = { push: true, ...filler(i++, this) };

        if (filleResult.push)
            this.push(filleResult.value);

    } while (filleResult.continue);

    return this;
}

export function rotate<T>(this: T[], steps: number = 1, selector?: (item: T, index: number, array: T[]) => boolean): T[] {
    if (steps === 0 || this.isEmpty())
        return [];

    const toRight = steps > 0 ? -1 : 1;
    const modificableIndexes: Array<number> =
        selector
            ? this.reduce<number[]>((accumulator, value, index, array) => selector(value, index, array) ? accumulator.concat(index) : accumulator, [])
            : [].fillWith((index) => ({ continue: index < this.lastIndex(), value: index }));
    const res: T[] = [];

    for (let i = 0, k = 0; i < this.length; i++)
        if (modificableIndexes.includes(i))
            res.push(this.from(modificableIndexes.from(toRight ? (k++ + -steps) : k++ + steps)));
        else
            res.push(this[i]);

    return res;
}

export function split<T>(this: T[], steps: number, byDivision: boolean = false): T[][] {
    if (steps < 0)
        return [];
    else if (steps === 0 || this.isEmpty())
        return [this];

    const numSections = byDivision ? Math.floor(this.length / steps) : steps;
    const res = [];

    for (let i = 0; i < this.length; i += numSections)
        res.push(this.slice(i, i + numSections));

    return res;
}