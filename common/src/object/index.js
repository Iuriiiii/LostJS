"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predetermines = exports.defaults = void 0;
function defaults(defs) {
    return { ...defs, ...this };
}
exports.defaults = defaults;
function predetermines(defs) {
    return { ...this, ...defs };
}
exports.predetermines = predetermines;
//# sourceMappingURL=index.js.map