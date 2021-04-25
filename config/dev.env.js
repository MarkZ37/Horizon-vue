'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  BASE_URL: '"http://localhost:8080/api"', //配置后端url
  NODE_ENV: '"development"'
})
