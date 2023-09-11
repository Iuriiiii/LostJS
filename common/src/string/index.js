"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = void 0;
const constants_1 = require("../constants");
function patch(object) {
    return Object.entries(object).reduce((acc, [key, value]) => {
        const patternResult = key.match(constants_1.REGEX_PATTERN_SEARCHER);
        if (!patternResult) {
            return acc.replace(key, value);
        }
        const [, pattern, flags] = patternResult;
        return acc.replace(new RegExp(pattern, flags), value);
    }, this);
}
exports.patch = patch;
//# sourceMappingURL=index.js.map