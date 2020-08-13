const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF3185",
              "@success-color": "@primary-color",
              "@processing-color": "#FFF96D",
              "@error-color": "#E20071",
              "@warning-color": "#f5e5b4",
              "@white": "#FFFFFF",
              "@black": "#373A3C",
              "@disabled-color": "#F0F0F3",
              "@font-size-base": "15px"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
