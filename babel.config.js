module.exports = {
  /**
   * @babel/preset-env allows for you to write next-gen JS
   * & have it compile to whatever env you want. In this case, node v10.x.x
   */
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10.0.0',
        },
      },
    ],
  ],
  plugins: [
    /**
     * Tree-shakes lodash modules from your build
     */
    'lodash',
  ],
};
