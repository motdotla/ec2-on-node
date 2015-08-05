'use strict'

var express = require('express')
var APPNAME = require('./package.json').name
var app = express()

app.get('/', function (req, res) {
  res.send(APPNAME)
})

module.exports = app
