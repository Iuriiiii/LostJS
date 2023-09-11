const regexPatternPattern = /^\/(.*)\/([dgimsuvy]*)$/;
export function patch(object) {
    return Object.entries(object).reduce((acc, [key, value]) => {
        const patternResult = key.match(regexPatternPattern);
        if (!patternResult) {
            return acc.replace(key, value);
        }
        const [, pattern, flags] = patternResult;
        return acc.replace(new RegExp(pattern, flags), value);
    }, this);
}
//# sourceMappingURL=index.js.map