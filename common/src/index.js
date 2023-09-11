"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const number_1 = require("./number");
const object_1 = require("./object");
const string_1 = require("./string");
if (!Array.prototype.circle)
    Array.prototype.circle = array_1.circleFrom;
if (!Array.prototype.isEmpty)
    Array.prototype.isEmpty = array_1.isEmpty;
if (!Array.prototype.lastIndex)
    Array.prototype.lastIndex = array_1.lastIndex;
if (!Array.prototype.random)
    Array.prototype.random = array_1.random;
if (!Array.prototype.at2)
    Array.prototype.at2 = array_1.at2;
if (!Array.prototype.from)
    Array.prototype.from = array_1.from;
if (!Array.prototype.rotate)
    Array.prototype.rotate = array_1.rotate;
if (!Array.prototype.fillWith)
    Array.prototype.fillWith = array_1.fillWith;
if (!Array.prototype.split)
    Array.prototype.split = array_1.split;
if (!Array.prototype.discriminate)
    Array.prototype.discriminate = array_1.discriminate;
if (!Number.prototype.close)
    Number.prototype.close = number_1.close;
if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = number_1.hasDecimals;
if (!Number.prototype.isBetween)
    Number.prototype.isBetween = number_1.isBetween;
if (!Number.prototype.times)
    Number.prototype.times = number_1.times;
if (!Number.random)
    Number.random = number_1.staticRandom;
if (!Object.patch)
    Object.patch = object_1.patch;
if (!Object.clone)
    Object.clone = object_1.clone;
if (!Object.toArray)
    Object.toArray = object_1.toArray;
if (!Object.pick)
    Object.pick = object_1.pick;
if (!Object.search)
    Object.search = object_1.search;
if (!String.prototype.patch)
    String.prototype.patch = string_1.patch;
//# sourceMappingURL=index.js.map