# Monkey patching

Monkey patching is a powerful yet controversial technique in programming, often used to modify or extend the functionality of an object, method, or class at runtime. While it's a convenient solution for handling third-party library inconsistencies or performing unit testing, it should be used judiciously due to the potential for introducing subtle bugs or making your code more difficult to understand and maintain.

The name "monkey patching" comes from the phrase "monkey with", meaning to tamper or fiddle with something. In programming, you are essentially "tampering with" or changing parts of a module or class without altering the original source code.

To illustrate this, consider a situation where you want to add logging functionality to the 'add' method of a math library:



```javascript
import MathLib from 'mathlib';

const mathLib = new MathLib();
const res = mathLib.add(2, 3);

// we can keep original implementation if we want to
// restore original implementation later on
// const originalAdd = mathLib.add;

// Let's override (monkey patch) original add
// method and replace it with our own implementation
// that supports logging
mathLib.add = function(a, b) {
    console.log(`You are adding ${a} and ${b}.`);
    return a + b;
}
```

This example illustrates the flexibility of monkey patching. Without having access to the source code of 'MathLib', we are able to introduce new behavior (logging) to an existing method.
  

👍 **Pros:**
- **Useful for mocking during unit testing:** Some testing libraries leverage monkey patching to replace methods with mock versions that make testing more isolated and predictable.
- **Bypassing bugs in third-party code:** If there's a bug in a library you don't control, you could monkey patch a fix without waiting for the library maintainers to update it.
- **Dynamic behavior changes:** Monkey patching can be used to add or change the behavior of objects at runtime, such as logging, profiling, or other runtime analysis.


👎 **Cons:**
- **Code discrepancy:** Monkey patching creates a discrepancy between the original source code and the observable behavior in the written code, which can lead to confusion for other developers.
- **Debugging complexity:** It can be hard to trace or debug issues due to the discrepancy mentioned above. When the behavior of methods isn't what's expected based on the source code, it can take a long time to realize that a monkey patch is the cause.
- **Maintenance issues:** If the underlying library changes, your monkey patches might break or start to exhibit unexpected behavior.
Namespace clashes: If two pieces of code monkey patch the same method but aren't aware of each other, they may interfere with each other, causing unexpected behavior or bugs.


The technique is often considered a 'hack' or a 'kludge', and as such, many developers advise to use it sparingly, if at all. It's important to remember that the better the design of your codebase is, the less likely you'll need to rely on techniques like monkey patching. When you do need to use it, be sure to document your code thoroughly to help maintain readability and ease of debugging.


## Practice time

- What is monkey patching?
- What are some scenarios where you could use monkey patching?
- What are the downsides of using monkey patching?