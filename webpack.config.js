const path = require('path');

module.exports = {
    externals: {
        react: "commonjs react",
        "react-dom": "commonjs react-dom",
      },
      output: {
        libraryTarget: 'commonjs2'
    },
}