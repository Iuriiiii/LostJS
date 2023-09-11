import { REGEX_PATTERN_SEARCHER } from "../constants";

export function extractRegex(needle: string) {
  const regex = REGEX_PATTERN_SEARCHER.exec(needle);
  const [, pattern, flags] = regex ?? [, needle, ""];
  const needleRegex = new RegExp(pattern!, flags);

  return needleRegex;
}
