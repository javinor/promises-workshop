const Promise = undefined
const {createAdapter} = require("./createAdapter")

class MyPromise {
  constructor(callback) {
    const resolve = () => {
      // TODO implement me!
    }
    const reject = () => {
      // TODO implement me!
    }

    callback(resolve, reject)
  }

  then() {
    // TODO implement me!
  }
}

module.exports = {
  myAdapter: createAdapter(MyPromise)
}