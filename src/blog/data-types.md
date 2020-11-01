---
title: "Data Types"
date: "2020-31-10"
---

## Data Types

When you operate with objects in Javascript the result can be quite different from what you expect. This happens because objects are reference data types, as opposed to primitive data types. 

Every variable in Javasacript is either an object or a primitive data type. Primitives data types are: string, number, boolean, undefined, null and symbol. Everything else is an object, including arrays. 

Primitive data types are **accessed by value**, and their values are **immutable**. Reference data types are **accessed by reference** and their values are **mutable**. Let's see how this works.

## Primitive Data Types 
##### (string, number, boolean, null, undefined, symbol)

In Javascript, variables are like containers that store values. When you assign a primitive value to a variable, you create a new place in memory to store that value. In the following code, *myNum* is the variable and *5* is the value it stores. 

```js
const myNum = 5;
```

If you assign the same primitive to different variables, each of them will point to a different place in memory, both storing the same value. Below, each variable points to different places in memory where the value *5* is stored. 

```js
const num1 = 5;
const num2 = 5;
console.log(num1 === num2) // true
```

When the compiler gets to a variable with a primitive value, the variable is replaced by the value - that is what  **accessed by value** means. Above, the compiler evaluates the expression *num1 === num2* as *5 === 5*, which is *true*. 

Primitive data types are also **immutable**, meaning they can't be changed. They don't have properties that can be manipulated in order to produce different values. Below, the value *"load"* does not change to *"loading"*. Instead, the variable *myWord* is first pointing to a place in memory where *"load"* is stored, and then it starts pointing to a different place in memory, where *"loading"* is stored. 

```js
let myWord = "load";
myWord = myWord + "ing";
console.log(myWord) // "loading"
```

## Reference Data Type 
#### (object)

Objects do not work in the same way. As expected, when you assign an object to a variable, a new place in memory is created to store that object. But even if their properties are the same, they are not actually the same object. 

```js
const obj1 = { name: "vitor" };
const obj2 = { name: "vitor" };
console.log(obj1 === obj2) // false
```

This happens because objects are **accessed by reference**. When the compiler gets to an object, the object is not replaced by its properties, but by its address in memory. Above, *obj1* and *obj2* are stored in different places in memory, therefore they are not actually the same object. Below, the same object is assigned to both variables, so that they both point to the exact same place in memory.

```js
const obj1 = { name: "vitor" };
const obj2 = obj1;

console.log(obj1 === obj2) // true
```

Objects are also **mutable**, meaning their properties can be reassigned. Below, we are changing a property of the object, and since both variables point to the same object, they both have access to the new property. 

```js
const obj1 = { name: "vitor" };
const obj2 = obj1;
obj2.age = 29;

console.log(obj1.age) // 29
```

On primitive data types, on the other hand, when a new variable is assigned to an old one, a new place in memory is created. The new variable does not create a reference to the old one. Instead, it copies the value to a new place in memory that imediatly becomes independent.

```js
let num1 = 5;
let num2 = num1;
num1 = 2;

console.log(num1 === num2) // false
```

## Summary
- **Primitive Data Types:**
  - **Types:** string, number, boolean, undefined, null, symbol
  - **Access by value:** you directly manipulate the value
  - **Immutable:** you cannot change the value by manipulating its properties
  - **Copying:** when a new variable references an old one, it copies the value stored, not the reference

- **Reference Data Types:**
  - **Types:** object
  - **Access by reference:** you manipulate the reference to the value, not the value itself
  - **Mutable:** you can change the object by manipulating its properties
  - **Copying:** when two variables reference the same object, they both are changed when the object changes. 

## Exercises

What will the following expressions evaluate to?

  - 
  ```js
  const a = 1;
  const b = 1;
  a !== b // ? 
  ```

  - 
  ```js
  const a = {};
  const b = {};
  a !== b // ?
  ```

  - 
  ```js
  const a = { name: "viQ" };
  const b = { name: "viQ" };
  a.name === b.name // ?
  ```

  - 
  ```js
  const a = 5;
  const b = { value: 5 };
  const c = b.value;
  a === c // ?
  ```