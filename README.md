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
#### Array.prototype.at2

Get a value by an index, like `Array.at` but it's circular.

##### Return

* ✅ if the array isn't empty: the value at the index.
* ❌ If the array is empty: undefined.

***
#### Array.prototype.isEmpty

Verify if the array is empty.

##### Return

* ✅ if the array isn't empty: true.
* ❌ If the array is empty: false.

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

