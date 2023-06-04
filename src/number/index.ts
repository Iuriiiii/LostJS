export function hasDecimals(this: Number): boolean {
  /* @ts-ignore */
  return this % 1 > 0;
}

export function isBetween(this: Number, min: number, max: number): boolean {
  return this >= min && this <= max;
}

export function close(this: Number, min: number, max: number): Number {
  if (this < min) return min;
  else if (this > max) return max;
  return this;
}

export function staticRandom(param: { min?: number; max?: number }): number {
  param.min ||= 0;
  param.max ||= Number.MAX_SAFE_INTEGER;

  return Math.random() * (param.max - 1) + param.min;
}

export function times(
  this: Number,
  cb: (...args: any) => void,
  ...args: any
): void {
  if (this <= 0) return;

  for (let i = 0; i < this; i++)
    cb(...args.map((arg: any) => (arg === "$" ? i : arg)));
}
