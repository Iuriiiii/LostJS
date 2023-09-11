import { REGEX_PATTERN_SEARCHER } from "../constants";
export function extractRegex(needle) {
    const regex = REGEX_PATTERN_SEARCHER.exec(needle);
    const [, pattern, flags] = regex ?? [, needle, ""];
    const needleRegex = new RegExp(pattern, flags);
    return needleRegex;
}
//# sourceMappingURL=index.js.map