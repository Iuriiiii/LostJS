# LostJS

LostJS  its a tiny library that adds some usefull methods to the native Js classes, it does not overwrite any of the standard methods.

## Instalattion

> npm install lostjs

## Usage

### ES6+
<table>
<tr>
<th>JavaScript</th>
<th>TypeScript</th>
</tr>
<tr>
<td>

```js
require('lostjs');
```

</td>
<td>

```ts
import 'lostjs';
```

</td>
</tr>
</table>

### CommonJS
<table>
<tr>
<th>JavaScript</th>
<th>TypeScript</th>
</tr>
<tr>
<td>

```js
require('lostjs/common');
```

</td>
<td>

```ts
import 'lostjs/common';
```

</td>
</tr>
</table>


## Documentation

In general, the method's name are very clear but, just in case, i wrote docs for u.

### for Array
***
#### Array.prototype.circle

Converts an array to a circular object reference, usefull for carousels.

##### Return

* ✅ The first object.
* ❌ If the array is empty: null.

##### Example

```ts
import 'lostjs';

const circle = [1,2,3].circle();

/*
interface ICircleElement<T> {
    isLast: boolean, // true if the current object is the last.
    isFirst: boolean, // true if the current object is the first.
    index: number, // The current index in the array
    prev: ICircleElement<T>, // The previous element
    next: ICircleElement<T>, // The next element
    value: T // The value
}
*/

/* All objects has the same structure */
console.log(circle.value); // 1
console.log(circle.index); // 0

console.log(circle.next.value); // 2
console.log(circle.next.index); // 1

console.log(circle.prev.value); // 3
console.log(circle.prev.index); // 2
```

***
#### Array.prototype.at2 ❗ DEPRECATED

Get a value by an index, like `Array.at` but it's circular.

##### Return

* ✅ if the array isn't empty: the value at the index.
* ❌ If the array is empty: undefined.

***
#### Array.prototype.from

Get a value by an index, like `Array.at` but it's circular.

##### Return

* ✅ if the array isn't empty: the value at the index.
* ❌ If the array is empty: undefined.

***
#### Array.prototype.rotate

Rotate the array.

##### Params

* 🔹 `steps: number` - The amount of steps to rotate, to right if positive, left if negative.
* 🔹 `selector: (item, index, array) => boolean` - A function that works as selector, should return true if the item might be rotated.

##### Return

* ✅ A new array with rotated elements.
* ❌ An empty array if steps is zero or the referenced array is empty.

#### Array.prototype.fillWith

Fills an array with values.

##### Params

* 🔹 `filler: (index, array) => {continue: boolean, push?: boolean, value: any}` - The function that returns the fill data.

> The `filler` function should return an object  with the action to realize in the fill's instance.
If the `continue` member is true, the filling will continue.
If `push` is true or undefined, the value will be pushed in the array, ignored otherwise.
`value` will be the value with which the array will be filled, can be changed in the time.

##### Return

* ✅ A new filled array.
* ❌ An empty array.

##### Example

```ts
[].fillWith((index) => ({continue: index < 9, push: index !== 5, value: index*2}));
/*
[0,  2,  4,  6, 8, 12, 14, 16, 18]
*/
```
***

#### Array.prototype.split

Splits an array.

##### Params

* 🔹 `steps: number` - The amount of item to each array element.
* 🔹 `byDivide: boolean = false` - Use the divide metodology.

##### Return

* ✅ A new array of arrays with the elements of the main array.

##### Example

```ts
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].split(2);
/*
[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
*/

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].split(2, true);
/*
[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
*/
```

***
#### Array.prototype.isEmpty

Verify if the array is empty.

##### Return

* ✅ if the array is empty: true.
* ❌ If the array isn't empty: false.

***
#### Array.prototype.lastIndex

Get the index of the last element, equivalent to `Array.length - 1`.

##### Return

* ✅ if the array isn't empty: `Array.length - 1`.
* ❌ If the array is empty: 0.

***
#### Array.prototype.random

Get a random element from the array.

##### Return

* ✅ if the array isn't empty: `Array.length - 1`.
* ❌ If the array is empty: `undefined`.

### for Number

***
#### Number.prototype.hasDecimals

Verify if a number has decimals.


##### Return

* ✅ if the number has decimals: true.
* ❌ If the number hasn't decimals: false.

***
#### Number.prototype.times

Calls a function `n` times.

##### Params

* 🔹 `cb: (...args: any) => void` - The callback that will be executed `n` times.
* 🔹 `...args: any` - The arguments that will be passed to the callback.

> If you pass '$' to the arguments, the counter will be passed to the callback.

##### Example

```ts
(5).times(console.log, 'Hola Mundo');
/*
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
*/

(5).times(console.log, 'Hola Mundo', '$');
/*
Hola Mundo 0
Hola Mundo 1
Hola Mundo 2
Hola Mundo 3
Hola Mundo 4
*/

let i = 0;

(5).times(() => i++);
/*
i = 5;
*/
```

***
#### Number.prototype.isBetween

Verify if a number is between the range.

##### Return

* ✅ if the number is between the range: true.
* ❌ If the number is not between the range: false.

***
#### Number.prototype.close

Closes the number between a range.

##### Params

* 🔹 `min: number` - The minimal value to get.
* 🔹 `max: number` - The maximal value to get.

##### Return

* ✅ A number between the `min` and `max`.

***
#### Number.random

Get a random number between a range.

##### Params

* 🔹 `param: {min?: number = 0, max?: number = Number.MAX_SAFE_INTEGER}` - An object that defines the min and max range.

##### Return

* ✅ A number between the `min` and `max`.

