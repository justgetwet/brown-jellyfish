// module.exports = {
//   reactStrictMode: true,
// }
module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
}
