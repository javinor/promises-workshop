# Make me a Promise for Greater Good

_"It is easy to make promises - it is hard work to keep them."_ 

-- Boris Johnson


## Workshop

This workshop is a starter-project with tests for implementing a fully-compliant `Promise` constructor.

implement your Promise constructor in [./src/adapter.js](./src/adapter.js) and run:

```
npm install
npm test
```

To see fully implemented examples go to [./src/examples/](./src/examples/) and/or run:

```
npm run test:native
npm run test:bluebird
```


## Notes, Tips and Recommendations

* The tests cover a lot of edge cases, don't feel obligated to make them pass in the order they appear

* It might be easier to implement the `resolve` logic first, and defer implementing the `reject` logic. They have a lot of similarities

* If `promise2 = promise1.then(onFulfilled, onRejected)`, implementations may allow `promise2 === promise1`, provided all requirements are met. I personally found it more convenient to implement `promise2 !== promise1`

* `npm install lodash`

## Background

A _promise_ represents the eventual result of an asynchronous operation. 


The `Promise` constructor [was introduced in ECMAScript 6 (June 2015)](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) and gave a native implementation to the Promise pattern. Prior to this, a number of JS libraries popped up, including the popular `bluebird.js` ([link](http://bluebirdjs.com/))


* Original proposal: http://wiki.commonjs.org/wiki/Promises/A

* Extended Spec: https://promisesaplus.com / https://github.com/promises-aplus/promises-spec

* Promises/A+ Compliance Test Suite: https://github.com/promises-aplus/promises-tests


### FP Anecdote

Functional Programming aficionados might enjoy/wallow at why the "Promises/A+" specification does not to implement promises as monads: [Twitter](https://twitter.com/JonathanAvinor/status/1155198142830338048?s=20) / [Github issue](https://github.com/promises-aplus/promises-spec/issues/94)
