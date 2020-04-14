module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/charts/" : "/",
  productionSourceMap: false,
  lintOnSave: false
};
