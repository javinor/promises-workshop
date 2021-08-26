const promisesAplusTests = require("promises-aplus-tests")
const {myAdapter} = require("../src/adapter")

promisesAplusTests(myAdapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
  const totalNumberOfTests = 872
  const numberOfFailures = err ? err.failures : 0
  console.log("========== Summary ==========")
  console.log("Number of passing tests: ", totalNumberOfTests - numberOfFailures)
  console.log("Number of failing tests: ", numberOfFailures)
  console.log("=============================")
});