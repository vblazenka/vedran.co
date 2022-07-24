# Monkey patching

Monkey patching is a mechanism we can use when we want to override some existing function or a module.

```javascript
import utils from './utils'

utils.processList = (list) => {
    // our custom implementation
}

```