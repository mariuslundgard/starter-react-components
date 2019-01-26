const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

// HOOKS
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})
require('ts-node').register({
  transpileOnly: true
})

const {App} = require('./app')

const app = express()

// WEBPACK
const webpackCompiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(webpackCompiler, {
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath
  })
)
app.use(webpackHotMiddleware(webpackCompiler, {log: false}))

app.get('/*', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(App, {}))
  res.send(`<!doctype html>
<html>
  <body>
    <div id="root">${html}</div>
    <script src="/main.js"></script>
  </body>
</html>`)
})

app.listen(8080, err => {
  if (err) panic(err)
  else logStartMessage()
})

function panic(err) {
  console.error(err)
  process.exit(1)
}

function logStartMessage() {
  console.log(`Listening at http://localhost:8080`)
}
