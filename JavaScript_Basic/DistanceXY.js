

/*Create a function to calculate the distance between two points defined by their x,y
coordinates*/

function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
  
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
  }
  
 
  const point1 = { x: 1, y: 2 };
  const point2 = { x: 4, y: 6 };
  
  const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
  console.log(`Distance between (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}): ${distance}`);
  