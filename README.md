bound-points
============
Computes a bounding box from a set of points in any dimension.

# Example

```javascript
var getBounds = require('bound-points')

var points = [[-1, 1], [5, 10], [-8, 13]]
console.log('2d:', getBounds(points))

var mesh = require('bunny')
console.log('3d:', getBounds(mesh.positions))
```

Output:

```
2d: [ [ -8, 1 ], [ 5, 13 ] ]
3d: [ [ -4.958475, -0.003149, -3.729833 ],
  [ 4.94885, 9.654748, 3.810639 ] ]
```

# Install

```
npm i bound-points
```

# API

#### `var bounds = require('bound-points')(points)`
Computes an axis aligned bounding box for a set of points.

* `points` is an array of points

**Returns** A pair of lower and upper bounds for the point set.

For example:

```js
[ [ minX, minY ], [ maxX, maxY ] ]
```

# License
(c) 2015 Mikola Lysenko. MIT License