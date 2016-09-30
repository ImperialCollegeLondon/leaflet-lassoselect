module.exports.contains = function(path, point) {
  // ray-casting algorithm based on
  // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
  var x = point.lat, y = point.lng;
  var inside = false;
  for (var i = 0, j = path.length - 1; i < path.length; j = i++) {
      var xi = path[i].lat, yi = path[i].lng;
      var xj = path[j].lat, yj = path[j].lng;
      var intersect = ((yi > y) != (yj > y)) &&
                      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) {
        inside = !inside;
      }
  }
  return inside;
};
