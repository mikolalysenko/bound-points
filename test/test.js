'use strict'

var tape = require('tape')
var bounds = require('../bounds')

tape('bounding box', function(t) {
  t.same(bounds([]), [[],[]])
  t.same(bounds([[1,2], [2,1]]), [[1,1], [2,2]])

  t.end()
})