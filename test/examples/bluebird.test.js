const promisesAplusTests = require("promises-aplus-tests")
const {bluebirdAdapter} = require("../../src/examples/bluebirdAdapter")

promisesAplusTests(bluebirdAdapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
});