"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = exports.rotate = exports.fillWith = exports.from = exports.at2 = exports.random = exports.circleFrom = exports.isEmpty = exports.lastIndex = void 0;
const enums_1 = require("../enums");
function lastIndex() {
    return this.length === 0 ? null : this.length - 1;
}
exports.lastIndex = lastIndex;
function isEmpty() {
    return this.length === 0;
}
exports.isEmpty = isEmpty;
function circleFrom() {
    if (isEmpty.call(this))
        return null;
    /* @ts-ignore */
    const first = {};
    let item = first;
    for (let i = 0; i < this.length; i++) {
        item.isFirst = i === 0;
        item.isLast = i === lastIndex.call(this);
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
function random() {
    return this[Math.floor(Math.random() * this.length)];
}
exports.random = random;
function at2(index) {
    return this.at(index % this.length);
}
exports.at2 = at2;
function from(index) {
    return this.at(index % this.length);
}
exports.from = from;
function fillWith(filler) {
    let i = 0, filleResult;
    do {
        filleResult = { push: true, ...filler(i++, this) };
        if (filleResult.push)
            this.push(filleResult.value);
    } while (filleResult.continue);
    return this;
}
exports.fillWith = fillWith;
function rotate(optionsOrSteps) {
    const { steps = 1, selector } = typeof optionsOrSteps === "number"
        ? { steps: optionsOrSteps }
        : optionsOrSteps ?? {};
    if (steps === 0 || isEmpty.call(this))
        return [];
    const res = [];
    const toRight = steps > 0 ? -1 : 1;
    const modificableIndexes = selector
        ? this.reduce((accumulator, item, index, array) => selector({ item, index, array })
            ? accumulator.concat(index)
            : accumulator, [])
        : [].fillWith((index) => ({
            continue: index < lastIndex.call(this),
            value: index,
        }));
    for (let i = 0, k = 0; i < this.length; i++)
        if (modificableIndexes.includes(i))
            res.push(from.call(this, from.call(modificableIndexes, toRight ? k++ + -steps : k++ + steps)));
        else
            res.push(this[i]);
    return res;
}
exports.rotate = rotate;
function split(steps, type = enums_1.SplitType.Parallelism) {
    if (steps < 0)
        return [];
    else if (steps === 0 || isEmpty.apply(this))
        return [this];
    const res = [];
    let numSections;
    switch (type) {
        case enums_1.SplitType.Parallelism:
            numSections = steps;
            break;
        case enums_1.SplitType.ExclusiveDivision:
            numSections = Math.floor(this.length / steps);
            break;
        case enums_1.SplitType.InclusiveDivision:
            numSections = Math.floor((this.length + 1) / steps);
            break;
    }
    for (let i = 0; i < this.length; i += numSections)
        res.push(this.slice(i, i + numSections));
    return res;
}
exports.split = split;
//# sourceMappingURL=index.js.map