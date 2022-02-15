const loaderUtils = require('loader-utils');
const minimize = require('minimize');

module.exports = function(source) {
  // var callback = this.async();
    // if (this.cacheable) {
    //     this.cacheable();
    // }
  const options = loaderUtils.getOptions(this) || {};//这里拿到 webpack.config.js 的 loader 配置
  console.log(options, 5); // eslint-disable-line
  const mini = new minimize(options);
  return mini.parse(source);
}