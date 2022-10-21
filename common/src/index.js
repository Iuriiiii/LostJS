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
if (!Number.prototype.close)
    Number.prototype.close = number_1.close;
if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = number_1.hasDecimals;
if (!Number.prototype.isBetween)
    Number.prototype.isBetween = number_1.isBetween;
//# sourceMappingURL=index.js.map