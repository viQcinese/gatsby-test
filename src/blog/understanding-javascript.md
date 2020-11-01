---
title: "Understanding Javascript"
date: "2020-01-11"
---

## Table of Contents
* [What is Javascript?](#what-is-javascript)
* [High Level and Low Level Languages](#high-level-and-low-level-languages)
* [Interpretation and Compilation](#interpretation-and-compilation)
* [Web Browsers and NodeJS](#web-browsers-and-nodejs)
* [The Web Browser Runtime Environment](#web-browser-runtime-environment)
* [The NodeJS Runtime Environment](#nodejs-runtime-environment)


## <a name="what-is-javascript"></a>
## What is Javascript?
Javascript is the main programming language of the web. It is a **high-level**, **single-threaded**, **interpreted** language, used to build both frontend and backend applications. Let's take a closer look at some of these terms in order to better understand what javascript is and how it works. 

## <a name="high-level-and-low-level-languages"></a>
## High Level and Low Level Languages
Every programming language has to communicate with the machine's underlying physical components in one way or another. Some languages are very closely related to the machine, and communicate directly to it. Others are more abstract, and have to communicate through a cascade of processes before getting to the underlying parts. 

At the lowest level we have **machinecode**, which is binary language. It communicates directly with the machine and represents the actual electric signals that get to the processor. 

Then we have **assembly language**, which is still very closely related to the machine components. Each computer is built from different parts, and assembly language varies according to the individual parts of the computer. 

Higher up we have **compiled languages** like C, GO and Rust, which are already very abstract languages. In order to be executed, they first have to go through a compiler, a piece of software that translates the code to assembly language. Once the code is compiled, it can be understood by the machine. 

On the highest level we have the **interpreted languages** like Python and Javascript. Interpreted languages can only be executed by an interpreter, which is usually built with a compiled language. 

The [difference between the compiler and the interpreter](https://kb.iu.edu/d/agsz#:~:text=The%20difference%20between%20an%20interpreted,program%20written%20in%20assembly%20language.&text=Creating%20a%20compiled%20program%20requires%20several%20steps.) is that the compiler builds a new code that can stand by itself, while the interpreter has to be around in order for the code to run.

Besides that, every language has its complexities and specificities, and the difference between compiled and interpreted languages is not as straightforward as it seems. [Let's take a closer look on the specific case of Javascript](https://blog.bitsrc.io/how-does-javascript-really-work-part-1-7681dd54a36d).

## <a name="interpretation-and-compilation"></a>
## Interpretation and Compilation

Technically, Javascript is an interpreted language. It was built to be interpreted at runtime by a piece of software, instead of being compiled into an executable binary file. That is to say that Javascript does not stand alone, it can only be executed inside a **runtime environment**.

However, in order to execute Javascript, most runtime environments have an engine that compiles javascript into machinecode. They use a technique called JIT (Just-in-time) compilation, compilating code on the run in order to increase performance. 

In the end, Javascript is a language that uses both interpretation and compilation to be executed. 

What about the runtime environments? Where does this execution takes place? 

## <a name="web-browsers-and-nodejs"></a>
## Web Browsers and NodeJS

There are basically two kinds of runtime environments for Javascript: web browsers and NodeJS. 

In the beggining Javascript could only be executed inside web browsers, meaning it was an exclusively client-side language. It could only be used to implement frontend logic on web applications, while the backend was built with languages such as Ruby, Java and PHP.

Then came NodeJS, offering a runtime environment for Javascript outside of web browsers. With NodeJS, Javascript got to the server-side, and it also became a popular backend language.

Now, **what exactly happens inside a runtime environment?** What is the difference between running javascript on web browsers and running javascript on NodeJS? 

## <a name="web-browser-runtime-environment"></a>
## The Web Browser Runtime Environment

The web browser Runtime Environment can be understand as the sum of its parts: the JS Engine, the Callback Queue, the EventLoop and the Web APIs.

The **JS Engine** is a compiler responsible for the execution of Javascript. It works with both the Memory Heap and the CallStack. 

The **Memory Heap** is responsible for memory allocation. When you define a variable you have to store it somewhere. The memory available is limited, therefore the JS engine has a complex underlying logic to decide what must and what mustn't be kept on memory at each time. 

The **CallStack** is responsible for keeping track of the thread of execution. 

Javascript is a **single-threaded** language, meaning it can only do one thing at a time. When a function is called, it is put into the CallStack, and when it resolves, it is taken off. Now, when a function calls another function, the first function is put on hold, and it will be blocked untill the second function resolves. The CallStack is a last-in-first-out (LIFO) data structure. 

This presents an immediate challenge to any programming language. If a piece of code takes too long to be executed, the rest of the code will be blocked, and the application will be stuck. 

Dealing with the web, the challenge is even greater. The HTTP is based on requests and responses between clients and servers, and each request-response cycle takes some time to be completed. What happens to the web application while the client awaits for some data to be loaded? 

**[If Javascript is single-threaded, how does it deal with tasks that take time to be completed?](https://medium.com/@theflyingmantis/javascript-single-threaded-non-blocking-asynchronous-concurrent-language-ffae97c57bef)** 

That's where the runtime environment quicks in. 

The **Web APIs** are a set of extra functionalities related to the browser that are built as an extension to the Javascript. You can use them inside your Javascript code, but they are assets to the runtime environment, not core Javascript, and some of them are able to handle asynchronous behavior in parallel to the Javascript thread of execution. 

When the thread of execution gets to an asynchronous function in the CallStack, the task it is supposed to performed is send to be processed by the WebAPIs. The function is imediatelly resolved, releasing the thread from a possible blockage, while the Web APIs process the task on their own. Each API has its own inner workings, but once the task is finished, the result is put on the **CallBack Queue**, waiting to get to the CallStack as soon as possible. 

The **EventLoop** is the responsible for watching both the CallStack and the Callback Queue, and as soon as the stack is empty, it checks the queue to see if there are any functions waiting to be procesed. If so, they are put into the CallStack, that follows its single-threaded nature.

As you can now see, Javascript is a single-threaded language, but it is executed in a non-blocking runtime environment. 

## <a name="nodejs-runtime-environment"></a>
## The NodeJS Runtime Environment

NodeJS is a cross-plataform Javascript runtime environment. It was made to allow Javascript to be used outside of the web browser. 

The [NodeJS environment](https://medium.com/softup-technologies/node-js-internals-an-introduction-to-nodes-runtime-and-architecture-d6ec295c05ab) is similar to the web browser's. At the heart of it all, we have the JavaScript Engine, and NodeJS uses **[V8](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)**, the same engine used in Google Chrome. Working side by side with the Engine, we have **Libuv**, a library that handles asynchronous operations and other server-related tasks. And finally we have the NodeJS set of **APIs**. 

The most sensible difference between NodeJS and web browsers is the set of APIs they offer. In both environments you will write Javascript code, but on each of them you will have access to different methods and objects that extend Javascript functionalities in different ways. 

Web Browser APIs are related to the kind of code you will write on the frontend, and NodeJS APIs are related to the kind of code you will write on the backend. 

Some examples of Browser Web APIs are:

- Document Object Model (DOM) - Allows the manipulation of the HTML and CSS through Javascript, and handles browser-related events such as clicks, key-presses and page loadings.

- Fetch API and XMLHttpRequest - Allows the client to make custom requests for data, such as when you send a login form, or scroll the page to load more content on social media. 

- Canvas an WebGL - Allows the creation of custom graphics, such as animations and browser games. 

Some examples of NodeJS APIs are: 

- http - Allows the creation and controll of an http server. Most times, though, you will use a NPM package instead. 

- fs - Allows the manipulation of system files, such as images, videos, text files and spreadsheets. You can use it to move files, make copies, extract data, etc. 

- crypto - Offers a set of methods to deal with encryption and decryption, such as hashing the user password before saving it the database. 

- buffer - Handle raw binary file in a fast and performant way. Such as when you want to stream a video to the client. 

## Exercises

- What is the difference between compiled and interpreted languages? 
- Is Javascript compiled or interpreted? 
- What is the difference between the browser and NodeJS? 
- How can a single-threaded Javascript deal with asynchronous tasks? 