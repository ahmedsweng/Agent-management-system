module.exports = {
  // specify an alternate main src directory, defaults to 'main'
  mainSrcDir: "main",
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: "renderer",

  webpack: (defaultConfig, env) =>
    Object.assign(defaultConfig, {
      entry: {
        background: "./main/background.ts",
        preload: "./main/preload.ts",
      },
    }),
};
