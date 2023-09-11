import { at2, circleFrom, fillWith, from, isEmpty, lastIndex, random, rotate, split, discriminate, } from "./array";
import { close, hasDecimals, isBetween, staticRandom, times } from "./number";
import { clone, patch, pick, search, toArray } from "./object";
import { patch as stringPatch } from "./string";
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
if (!Array.prototype.split)
    Array.prototype.split = split;
if (!Array.prototype.discriminate)
    Array.prototype.discriminate = discriminate;
if (!Number.prototype.close)
    Number.prototype.close = close;
if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = hasDecimals;
if (!Number.prototype.isBetween)
    Number.prototype.isBetween = isBetween;
if (!Number.prototype.times)
    Number.prototype.times = times;
if (!Number.random)
    Number.random = staticRandom;
if (!Object.patch)
    Object.patch = patch;
if (!Object.clone)
    Object.clone = clone;
if (!Object.toArray)
    Object.toArray = toArray;
if (!Object.pick)
    Object.pick = pick;
if (!Object.search)
    Object.search = search;
if (!String.prototype.patch)
    String.prototype.patch = stringPatch;
export * from "./types";
export * from "./interfaces";
export * from "./enums";
//# sourceMappingURL=index.js.map