# Monkey patching

Monkey patching is a mechanism we can use to replace or extend some piece of code at runtime.
A lot of times it is used for overriding methods in third-party libraries or for mocking when writing unit tests.

As an example, let's say we want to add logging to the `add` method of a math library.


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


  
👍 **Pros:**
- useful for mocking during unit testing (libraries usually provide a way to do it properly)
- workaround for bugs in third-party code
- add code logging/analysis libraries to existing code


👎 **Cons:**
- creates a discrepancy between original source code and observable behaviour in the written code
- hard to debug issues due to the discrepancy mentioned in the previous point


## Practice time

- What is monkey patching?
- What are some scenarios where you could use monkey patching?
- What are the downsides of using monkey patching?