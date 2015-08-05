#!/usr/bin/env node

var app = require('./')
var http = require('http')
var port = process.env.PORT || 8000
var APPNAME = require('./package.json').name

var server = http.createServer(app).listen(port, function () {
  var address = this.address()
  console.log('%s worker %d running on http://%s:%d',
    APPNAME, process.pid, address.address, address.port)
})

module.exports = server
