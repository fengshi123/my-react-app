const { override, addWebpackModuleRule, addWebpackAlias  } = require('customize-cra')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const path = require("path")
const { isEnvDevelopment, isEnvProduction } =  require('./env.js')
const { getStyleLoaders } =  require('./utils')

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;


module.exports = override(
  addWebpackModuleRule(
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction
            ? shouldUseSourceMap
            : isEnvDevelopment,
          modules: {
            mode: 'icss',
          },
        },
        'less-loader'
      ),
      sideEffects: true,
    },
  ),
  addWebpackModuleRule(
    {
      test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction
            ? shouldUseSourceMap
            : isEnvDevelopment,
          modules: {
            mode: 'local',
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
        'less-loader'
      ),
    },
  ),
  addWebpackAlias({
    "components": path.resolve(__dirname, "src/components")
  })
)
