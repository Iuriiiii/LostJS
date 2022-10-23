/* @ts-nocheck */
import { circleFrom, isEmpty, lastIndex, random, at2, fillWith, from, rotate } from './array';
import { close, hasDecimals, isBetween, staticRandom } from './number';
import { defaults, predetermines } from './object';
export * from '../types';
if (!Array.prototype.circle)
    Array.prototype.circle = circleFrom;
if (!Array.prototype.isEmpty)
    Array.prototype.isEmpty = isEmpty;
if (!Array.prototype.lastIndex)
    Array.prototype.lastIndex = lastIndex;
if (!Array.prototype.random)
    Array.prototype.random = random;
if (!Array.prototype.at2)
    Array.prototype.at2 = at2;
if (!Array.prototype.from)
    Array.prototype.from = from;
if (!Array.prototype.rotate)
    Array.prototype.rotate = rotate;
if (!Array.prototype.fillWith)
    Array.prototype.fillWith = fillWith;
if (!Number.prototype.close)
    Number.prototype.close = close;
if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = hasDecimals;
if (!Number.prototype.isBetween)
    Number.prototype.isBetween = isBetween;
if (!Number.random)
    Number.random = staticRandom;
if (!Object.defaults)
    Object.prototype.defaults = defaults;
if (!Object.predetermines)
    Object.prototype.predetermines = predetermines;
//# sourceMappingURL=index.js.map