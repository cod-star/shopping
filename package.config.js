module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewPortWidth:375,
      viewPortHeight:667,
      unitPrecision: 5,
      veiwPortUnit: 'vw',
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBar/]
    }
  }
}