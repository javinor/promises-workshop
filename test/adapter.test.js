const promisesAplusTests = require("promises-aplus-tests")
const {myAdapter} = require("../src/adapter")

promisesAplusTests(myAdapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
});