export function lastIndex() {
    return this.length === 0 ? 0 : this.length - 1;
}
export function isEmpty() {
    return this.length === 0;
}
export function circleFrom() {
    if (this.isEmpty())
        return null;
    /* @ts-ignore */
    const first = {};
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
}
;
export function random() {
    return this[Math.floor(Math.random() * this.length)];
}
;
/**
 * @deprecated
 * @param this
 * @param index
 * @returns The element in the position or undefinded if the array is empty.
 */
export function at2(index) {
    return this.at(index % this.length);
}
export function from(index) {
    return this.at(index % this.length);
}
export function fillWith(filler) {
    let i = 0, filleResult;
    do {
        filleResult = { push: true, ...filler(i++, this) };
        if (filleResult.push)
            this.push(filleResult.value);
    } while (filleResult.continue);
    return this;
}
export function rotate(steps = 1, selector) {
    if (steps === 0 || this.isEmpty())
        return [];
    const toRight = steps > 0 ? -1 : 1;
    const modificableIndexes = selector
        ? this.reduce((accumulator, value, index, array) => selector(value, index, array) ? accumulator.concat(index) : accumulator, [])
        : [].fillWith((index) => ({ continue: index < this.lastIndex(), value: index }));
    const res = [];
    for (let i = 0, k = 0; i < this.length; i++)
        if (modificableIndexes.includes(i))
            res.push(this.from(modificableIndexes.from(toRight ? (k++ + -steps) : k++ + steps)));
        else
            res.push(this[i]);
    return res;
}
//# sourceMappingURL=index.js.map