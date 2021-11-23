const withLess = require("next-with-less");
module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        "primary-color": "#9900FF",
        "border-radius-base": "2px",
        /* ... */
      },
    },
  },
})
