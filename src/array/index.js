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
export function at2(index) {
    return this.at(index % this.length);
}
//# sourceMappingURL=index.js.map