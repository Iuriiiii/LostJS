"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.circleFrom = exports.isEmpty = exports.lastIndex = void 0;
function lastIndex() {
    return this.length === 0 ? 0 : this.length - 1;
}
exports.lastIndex = lastIndex;
function isEmpty() {
    return this.length === 0;
}
exports.isEmpty = isEmpty;
function circleFrom() {
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
exports.circleFrom = circleFrom;
;
function random() {
    return this[Math.floor(Math.random() * this.length)];
}
exports.random = random;
;
//# sourceMappingURL=index.js.map