---
title: "Variables, Scope and Hoisting"
date: "2020-31-10"
---

## Variable declarations

In Javascript you can use three different keywords to declare a variable: let, const and var. 

- **var:**
  - Function-Scope
  - Can be reassigned to a new value
  - Declaration is hoisted

- **let:**
  - Block-Scope
  - Can be reassigned to a new value
  - Declaration is not hoisted

- **const:**
  - Block-Scope
  - Cannot be reassigned to a new value
  - Declaration is not hoisted

- **Hoisting:**
  - var and function declarations are stored on the heap during compilation, as if they were moved to the top of the code

- **Scope:**
  - Where a variable is accessable
  - let and const are block-scoped, they are only accessable inside the block they were declared in
  - var is function-scoped, only functions create scope, not blocks
  - A block is a part of the code wrapped in {}, such as *loops*, *functions* and *ifs*.

- **Closure:**