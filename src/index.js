module.exports = function solveEquation(equation) {

  var compareFunc = (a,b) => a - b;

  var x1 = 0;
  var x2 = 0;

  var equation = equation;

  var arr = [];
  var newArr = [];

  arr = equation.split(' * ');

  var a = +arr[0];
  var [, simbol1, value1] = arr[1].split(' ');
  var b = +(simbol1 + '' + value1);
  var [, simbol2, value2] = arr[2].split(' ');
  var c = +(simbol2 + '' + value2);

  var d = b*b - 4*a*c;

  if( d >= 0 ) {
    x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

    newArr.push(x1);
    newArr.push(x2);

    newArr.sort(compareFunc);
    return newArr;
  } else {
    return newArr;
  }

}
