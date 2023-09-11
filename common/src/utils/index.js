"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRegex = void 0;
const constants_1 = require("../constants");
function extractRegex(needle) {
    const regex = constants_1.REGEX_PATTERN_SEARCHER.exec(needle);
    const [, pattern, flags] = regex ?? [, needle, ""];
    const needleRegex = new RegExp(pattern, flags);
    return needleRegex;
}
exports.extractRegex = extractRegex;
//# sourceMappingURL=index.js.map