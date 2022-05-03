
const path = require("path")
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);


const paths = {
  publicUrlOrPath,
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
}

module.exports = paths;