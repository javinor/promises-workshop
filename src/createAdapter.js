const createAdapter = Promise => {
  return {
    deferred: () => {
      let resolve, reject
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej
      })

      return {
        promise,
        resolve,
        reject
      }
    }
  }
}

module.exports = {
  createAdapter
}