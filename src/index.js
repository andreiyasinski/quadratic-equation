module.exports = function solveEquation(equation) {

  let compareFunc = (a,b) => a - b;

  let arr = [];
  let newArr = [];

  arr = equation.split(' * ');

  let a = +arr[0];
  let [, simbol1, value1] = arr[1].split(' ');
  let b = +(simbol1 + '' + value1);
  let [, simbol2, value2] = arr[2].split(' ');
  let c = +(simbol2 + '' + value2);

  let d = b*b - 4*a*c;

  if( d >= 0 ) {
    let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

    newArr.push(x1);
    newArr.push(x2);

    newArr.sort(compareFunc);
    return newArr;
  } else {
    return newArr;
  }

}
