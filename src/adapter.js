const Promise = undefined
const { createAdapter } = require("./createAdapter")

class MyPromise {
  constructor(callback) {
    this.state = 'pending'
    this.successHandlers = []
    this.failureHandlers = []

    callback(this.resolve, this.reject)
  }

  resolve(value) {
    // TODO implement me!
  }

  reject(reason) {
    // TODO implement me!
  }

  then(onFulfilled, onRejected) {
    // TODO implement me!
  }
}

module.exports = {
  myAdapter: createAdapter(MyPromise),
  MyPromise,
}