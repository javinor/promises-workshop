const promisesAplusTests = require("promises-aplus-tests")
const {nativeAdapter} = require("../../src/examples/nativeAdapter")

promisesAplusTests(nativeAdapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
});