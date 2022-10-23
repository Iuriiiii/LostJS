import '../common';

describe('Array tests', () => {
    test('isEmpty should be true', () => {
        expect([].isEmpty()).toBe(true);
    })

    test('isEmpty should be false', () => {
        expect([1].isEmpty()).toBe(false);
    })

    test('lastIndex should be 0', () => {
        expect([1].lastIndex()).toBe(0);
        expect([].lastIndex()).toBe(0);
    })

    test('lastIndex should be 1', () => {
        expect([1, 2].lastIndex()).toBe(1);
    })

    test('lastIndex should be 4', () => {
        expect([1, 2, 3, 4, 5].lastIndex()).toBe(4);
    })

    test('at2 should work correctly', () => {
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
    })

    test('random should be greater than 0 and less than 6', () => {
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
    })

    test('should return a circle', () => {
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
    })

    test('fillWith should work correctly', () => {
        const array = [].fillWith((index) => ({ continue: index < 9, value: index }));
        const array2 = [].fillWith((index) => ({ continue: index < 9, value: 's' }));

        expect(array.length).toBe(10);

        for (let i = 0; i < array.length; i++)
            expect(array[i]).toBe(i);

        expect(array2.length).toBe(10);

        for (let i = 0; i < array2.length; i++)
            expect(array2[i]).toBe('s');
    });

    test('rotate should work correctly', () => {
        const array = [1, 2, 3];

        expect(array.rotate(1)).toMatchObject([3, 1, 2]);
        expect(array.rotate(-1)).toMatchObject([2, 3, 1]);

        const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(array2.rotate(2)).toMatchObject(['i', 'j', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
        expect(array2.rotate(-1)).toMatchObject(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'a']);
        const res = array2.rotate(1, (item, index) => index % 2 === 0);

        expect(res).toMatchObject(['i', 'b', 'a', 'd', 'c', 'f', 'e', 'h', 'g', 'j']);
});
});

describe('Number tests', () => {
    test('Number.random should be ok', () => {
        for (let i = 0; i < 1000; i++) {
            expect(Number.random({ min: 1, max: 2 })).toBeGreaterThanOrEqual(1);
            expect(Number.random({ min: 1, max: 2 })).toBeLessThanOrEqual(2);
            expect(Math.floor(Number.random({ min: 1, max: 2 }))).toBeGreaterThanOrEqual(1);
            expect(Math.floor(Number.random({ min: 1, max: 2 }))).toBeLessThanOrEqual(2);
        }
    });

    test('isBetween should return true', () => {
        expect((50).isBetween(40, 60)).toBeTruthy();
    });

    test('isBetween should return true', () => {
        expect((50).isBetween(50, 50)).toBeTruthy();
    });

    test('isBetween should return false', () => {
        expect((50).isBetween(40, 42)).toBeFalsy();
    });

    test('close should return 50', () => {
        expect((50).close(40, 60)).toBe(50);
    });

    test('close should return 40', () => {
        expect((0).close(40, 60)).toBe(40);
    });

    test('close should return 60', () => {
        expect((100).close(40, 60)).toBe(60);
    });

    test('hasDecimals should return true', () => {
        expect((100.1).hasDecimals()).toBe(true);
    });

    test('hasDecimals should return true', () => {
        expect((100).hasDecimals()).toBe(false);
    });
});

describe('Object tests', () => {
    test('defaults should work corretly', () => {
        const obj = { a: true, d: 1 };

        expect(obj.defaults({ b: true }).b).toBe(true);
        expect(obj.defaults({ b: true }).a).toBe(true);
        expect(obj.defaults({ b: true }).d).toBe(1);
        /* @ts-ignore */
        expect(obj.defaults({ b: true }).c).toBe(undefined);
        expect(obj.defaults({ d: 2 }).d).toBe(1);

    });

    test('predetermines should work corretly', () => {
        const obj = { a: true, d: 1 };

        expect({ b: true }.predetermines(obj).b).toBe(true);
        expect({ b: true }.predetermines(obj).a).toBe(true);
        expect({ b: true }.predetermines(obj).d).toBe(1);
        /* @ts-ignore */
        expect({ b: true }.predetermines(obj).c).toBe(undefined);
        expect({ d: 2 }.predetermines(obj).d).toBe(1);
    })
});
