const BluebirdPromise = require("bluebird")
const {createAdapter} = require("../createAdapter")

module.exports = {
  bluebirdAdapter: createAdapter(BluebirdPromise)
}