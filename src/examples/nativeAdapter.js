const {createAdapter} = require("../createAdapter")

module.exports = {
  nativeAdapter: createAdapter(Promise)
}