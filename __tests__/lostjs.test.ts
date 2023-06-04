import "../common";
import { SplitType } from "../common/src/enums";

describe("Array tests", () => {
  test("isEmpty should be true", () => {
    expect([].isEmpty()).toBe(true);
  });

  test("isEmpty should be false", () => {
    expect([1].isEmpty()).toBe(false);
  });

  test("lastIndex should be 0", () => {
    expect([1].lastIndex()).toBe(0);
    expect([].lastIndex()).toBe(null);
  });

  test("lastIndex should be 1", () => {
    expect([1, 2].lastIndex()).toBe(1);
  });

  test("lastIndex should be 4", () => {
    expect([1, 2, 3, 4, 5].lastIndex()).toBe(4);
  });

  test("at2 should work correctly", () => {
    const array = [1, 2, 3, 4, 5];

    expect([].at2(0)).toBe(undefined);
    expect(array.at2(0)).toBe(1);
    expect(array.at2(1)).toBe(2);
    expect(array.at2(2)).toBe(3);
    expect(array.at2(3)).toBe(4);
    expect(array.at2(4)).toBe(5);
    expect(array.at2(5)).toBe(1);
    expect(array.at2(6)).toBe(2);
    expect(array.at2(7)).toBe(3);
  });

  test("random should be greater than 0 and less than 6", () => {
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeGreaterThanOrEqual(1);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);
    expect([1, 2, 3, 4, 5].random()).toBeLessThanOrEqual(5);

    expect([].random()).toBe(undefined);
  });

  test("should return a circle", () => {
    const circle = [1, 2, 3, 4, 5].circle();

    expect(circle).toBeTruthy();
    expect(circle?.value).toBe(1);
    expect(circle?.next?.value).toBe(2);
    expect(circle?.next?.next.value).toBe(3);
    expect(circle?.next?.next.next.value).toBe(4);
    expect(circle?.next?.next.next.next.value).toBe(5);
    expect(circle?.next?.next.next.next.next.value).toBe(1);

    expect(circle?.index).toBe(0);
    expect(circle?.next?.index).toBe(1);
    expect(circle?.next?.next.index).toBe(2);
    expect(circle?.next?.next.next.index).toBe(3);
    expect(circle?.next?.next.next.next.index).toBe(4);
    expect(circle?.next?.next.next.next.next.index).toBe(0);

    expect(circle?.isFirst).toBe(true);
    expect(circle?.next?.next.next.next.isLast).toBe(true);
    expect(circle?.next?.next.next.next.next.isFirst).toBe(true);
  });

  test("fillWith should work correctly", () => {
    const array = [].fillWith((index) => ({
      continue: index < 9,
      value: index,
    }));
    const array2 = [].fillWith((index) => ({
      continue: index < 9,
      value: "s",
    }));

    expect(array.length).toBe(10);

    for (let i = 0; i < array.length; i++) expect(array[i]).toBe(i);

    expect(array2.length).toBe(10);

    for (let i = 0; i < array2.length; i++) expect(array2[i]).toBe("s");
  });

  test("rotate should work correctly", () => {
    console.log(
      [].fillWith((index, array) => ({ continue: index < 49, value: index }))
    );

    const array = [1, 2, 3];
    const array2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const array3 = ["a", 0, "c", 0, "e", 0, "g", 0, "i", 0];

    const compare1 = ["i", "j", "a", "b", "c", "d", "e", "f", "g", "h"];
    const compare2 = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "a"];
    const compare3 = ["i", 0, "a", 0, "c", 0, "e", 0, "g", 0];
    const compare4 = ["c", 0, "e", 0, "g", 0, "i", 0, "a", 0];

    expect(array.rotate()).toMatchObject([3, 1, 2]);
    expect(array.rotate(-1)).toMatchObject([2, 3, 1]);
    expect(array2.rotate(2)).toMatchObject(compare1);
    expect(array2.rotate(-1)).toMatchObject(compare2);
    expect(
      array3.rotate({
        selector: ({ item }) => item !== 0,
      })
    ).toMatchObject(compare3);

    expect(
      array3.rotate({
        steps: -1,
        selector: ({ item }) => item !== 0,
      })
    ).toMatchObject(compare4);
  });

  test("split should work correctly", () => {
    const array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const array2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const compare1 = [["a", "b"], ["c", "d"], ["e", "f"], ["g", "h"], ["i"]];
    const compare2 = [
      ["a", "b"],
      ["c", "d"],
      ["e", "f"],
      ["g", "h"],
      ["i", "j"],
    ];
    const compare3 = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i", "j"],
    ];
    const compare4 = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]];
    const compare5 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const compare6 = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
    const compare7 = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
    ];

    expect([].split(2)).toMatchObject([[]]);
    expect(array2.split(2)).toMatchObject(compare1);
    expect(array1.split(2)).toMatchObject(compare2);
    expect(array1.split(2, SplitType.ExclusiveDivision)).toMatchObject(
      compare3
    );
    expect(array1.split(0)).toMatchObject(compare4);
    expect(array2.split(-1)).toMatchObject([]);
    expect(array1.split(array1.length)).toMatchObject(compare4);

    expect(array3.split(3)).toMatchObject(compare5);
    expect(array3.split(2, SplitType.ExclusiveDivision)).toMatchObject(
      compare6
    );
    expect(array3.split(2, SplitType.InclusiveDivision)).toMatchObject(
      compare7
    );
  });
});

describe("Number tests", () => {
  test("Number.random should be ok", () => {
    for (let i = 0; i < 1000; i++) {
      expect(Number.random({ min: 1, max: 2 })).toBeGreaterThanOrEqual(1);
      expect(Number.random({ min: 1, max: 2 })).toBeLessThanOrEqual(2);
      expect(
        Math.floor(Number.random({ min: 1, max: 2 }))
      ).toBeGreaterThanOrEqual(1);
      expect(Math.floor(Number.random({ min: 1, max: 2 }))).toBeLessThanOrEqual(
        2
      );
    }
  });

  test("isBetween should return true", () => {
    expect((50).isBetween(40, 60)).toBeTruthy();
  });

  test("isBetween should return true", () => {
    expect((50).isBetween(50, 50)).toBeTruthy();
  });

  test("isBetween should return false", () => {
    expect((50).isBetween(40, 42)).toBeFalsy();
  });

  test("close should return 50", () => {
    expect((50).close(40, 60)).toBe(50);
  });

  test("close should return 40", () => {
    expect((0).close(40, 60)).toBe(40);
  });

  test("close should return 60", () => {
    expect((100).close(40, 60)).toBe(60);
  });

  test("hasDecimals should return true", () => {
    expect((100.1).hasDecimals()).toBe(true);
  });

  test("hasDecimals should return true", () => {
    expect((100).hasDecimals()).toBe(false);
  });

  test("times should work correctly", () => {
    let i = 0;
    let s = "";

    (3).times(() => i++);
    (5).times((i: number) => (s += i), "$");

    expect(i).toBe(3);
    expect(s).toBe("01234");
  });
});

describe("Object test", () => {
  test("patch", () => {
    const object = {
      a: true,
      b: 1,
      c: { a: 1, b: "2", c: [1, 2, 3] },
      d: undefined,
      e: null,
    };
    const patched1 = Object.patch(object, { a: false });
    const patched2 = Object.patch(object, { b: 2 });
    const patched3 = Object.patch(object, { c: { c: [3, 2, 1] } });
    const patched4 = Object.patch(object, { d: 33 });
    const patched5 = Object.patch(
      object,
      {
        a: false,
        b: 55,
        c: {},
        d: "arroz",
        e: null,
      },
      ({ key, value }) => value === undefined
    );

    expect(typeof patched1.b).toBe("number");
    expect(patched1.b).toBe(1);
    expect(patched1).toMatchObject({
      a: false,
      b: 1,
      c: { a: 1, b: "2", c: [1, 2, 3] },
      d: undefined,
      e: null,
    });

    expect(typeof patched2.b).toBe("number");
    expect(patched2.b).toBe(2);
    expect(patched2).toMatchObject({
      a: true,
      b: 2,
      c: { a: 1, b: "2", c: [1, 2, 3] },
      d: undefined,
      e: null,
    });

    expect(patched3).toMatchObject({
      a: true,
      b: 1,
      c: { c: [3, 2, 1] },
      d: undefined,
      e: null,
    });

    expect(patched4).toMatchObject({
      a: true,
      b: 1,
      c: { a: 1, b: "2", c: [1, 2, 3] },
      d: 33,
      e: null,
    });

    expect(patched5).toMatchObject({
      a: true,
      b: 1,
      c: { a: 1, b: "2", c: [1, 2, 3] },
      d: "arroz",
      e: null,
    });
  });

  test("toArray", () => {
    const object = { a: true, b: 1, c: { a: 1, b: "2", c: [1, 2, 3] } };
    const arrayObject = Object.toArray(object);

    expect(arrayObject).toBeInstanceOf(Array);
    expect(arrayObject["a"]).toBe(true);
    expect(arrayObject["b"]).toBe(1);
    expect(arrayObject["c"]).toMatchObject({ a: 1, b: "2", c: [1, 2, 3] });
  });

  test("clone", () => {
    const object = { a: true, b: 1, c: { a: 1, b: "2", c: [1, 2, 3] } };
    const copyObject = Object.clone(object);

    expect(typeof copyObject).toBe(typeof object);
    expect(copyObject).toMatchObject(object);
    expect(copyObject.a).toBe(true);
    expect(copyObject.b).toBe(1);
    expect(copyObject.c).toMatchObject({ a: 1, b: "2", c: [1, 2, 3] });

    expect(object.c === object.c).toBe(true);
    expect(copyObject.c === object.c).toBe(false);
    expect(copyObject.c.c === object.c.c).toBe(false);
  });

  test("pick", () => {
    const object = { a: true, b: 1, c: { a: 1, b: "2", c: [1, 2, 3] } };
    const pick1 = Object.pick(object, ["a"]);
    const pick2 = Object.pick(object, ["c"]);
    const pick3 = Object.pick(object, ["c"], true);

    expect(typeof pick1).toBe(typeof object);
    expect(pick1.a).toBe(object.a);
    /* @ts-ignore */
    expect(pick1.b).toBe(undefined);

    expect(pick2.c === object.c).toBe(true);
    expect(pick2.c.a).toBe(object.c.a);

    expect(pick3.c === object.c).toBe(false);
    expect(pick3.c.a).toBe(object.c.a);
  });
});
