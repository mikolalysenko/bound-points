var getBounds = require('../bounds')

var points = [[-1, 1], [5, 10], [-8, 13]]
console.log('2d:', getBounds(points))

var mesh = require('bunny')
console.log('3d:', getBounds(mesh.positions))