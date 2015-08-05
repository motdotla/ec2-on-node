'use strict'

var request = require('supertest')
var it = require('mocha').it
var describe = require('mocha').describe

var app = require('../')

describe('GET /', function () {
  it('responds with 200', function (done) {
    request(app).get('/').expect(200, done)
  })
})
