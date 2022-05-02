const { override, addWebpackModuleRule, addWebpackAlias  } = require('customize-cra')
const path = require("path")

module.exports = override(
  addWebpackModuleRule({test: /\.txt$/, use: 'raw-loader'}),
  addWebpackAlias({
    "components": path.resolve(__dirname, "src/components")
   })
)
