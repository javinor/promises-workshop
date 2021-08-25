const Promise = undefined
const {createAdapter} = require("./createAdapter")

class MyPromise {
  constructor(callback) {
    const resolve = (value) => {
      // TODO implement me!
    }
    const reject = (reason) => {
      // TODO implement me!
    }

    callback(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // TODO implement me!
  }
}

module.exports = {
  myAdapter: createAdapter(MyPromise),
  MyPromise,
}