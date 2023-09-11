const regexPatternPattern = /^\/(.*)\/([dgimsuvy]*)$/;

export function patch(this: String, object: object): String {
  return Object.entries(object).reduce((acc, [key, value]) => {
    const patternResult: RegExpMatchArray | null =
      key.match(regexPatternPattern);

    if (!patternResult) {
      return acc.replace(key, value);
    }

    const [, pattern, flags] = patternResult;

    return acc.replace(new RegExp(pattern, flags), value);
  }, this);
}
