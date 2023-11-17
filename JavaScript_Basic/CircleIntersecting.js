

/*Create afunction that will return aBoolean value indicating iftwo circles
defined by center coordinates and radius are intersecting*/

function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distanceBetweenCenters = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const sumOfRadii = r1 + r2;
  
    return distanceBetweenCenters < sumOfRadii;
  }
  
  // Example usage:
  const circle1 = { x: 1, y: 2, radius: 3 };
  const circle2 = { x: 4, y: 6, radius: 2 };
  
  const intersecting = areCirclesIntersecting(circle1.x, circle1.y, circle1.radius, circle2.x, circle2.y, circle2.radius);
  console.log("Are circles intersecting?", intersecting);
  