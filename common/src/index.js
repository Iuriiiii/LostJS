"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* @ts-nocheck */
const array_1 = require("./array");
const number_1 = require("./number");
const object_1 = require("./object");
__exportStar(require("../types"), exports);
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
if (!Number.prototype.close)
    Number.prototype.close = number_1.close;
if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = number_1.hasDecimals;
if (!Number.prototype.isBetween)
    Number.prototype.isBetween = number_1.isBetween;
if (!Number.random)
    Number.random = number_1.staticRandom;
if (!Object.defaults)
    Object.prototype.defaults = object_1.defaults;
if (!Object.predetermines)
    Object.prototype.predetermines = object_1.predetermines;
//# sourceMappingURL=index.js.map