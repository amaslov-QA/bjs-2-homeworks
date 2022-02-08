function solveEquation(a, b, c) {
  let arr = [];
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  }
  else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x2);
  }
  else if (d === 0) {
    x3 = (-b) / (2 * a);
    arr.push(x3)
  }
  return arr;
}
