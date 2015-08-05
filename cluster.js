#!/usr/bin/env node

var cluster = require('cluster')
var APPNAME = require('./package.json').name

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length
  for (var i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  cluster.on('online', function (server) {
    console.log(APPNAME, 'server', server.process.pid, 'online')
  })

  cluster.on('exit', function (server) {
    console.warn(APPNAME, 'server', server.process.pid, 'died')
    cluster.fork()

  })

} else {
  require('./server')
}
