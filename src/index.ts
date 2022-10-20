/* @ts-nocheck */
import { circleFrom, isEmpty, lastIndex, random } from './array';
import { close, hasDecimals, isBetween } from './number';
export * from '../types';

if (!Array.prototype.circle)
    Array.prototype.circle = circleFrom;

if (!Array.prototype.isEmpty)
    Array.prototype.isEmpty = isEmpty;

if (!Array.prototype.lastIndex)
    Array.prototype.lastIndex = lastIndex;

if (!Array.prototype.random)
    Array.prototype.random = random;

if (!Number.prototype.close)
    Number.prototype.close = close;

if (!Number.prototype.hasDecimals)
    Number.prototype.hasDecimals = hasDecimals;

if (!Number.prototype.isBetween)
    Number.prototype.isBetween = isBetween;