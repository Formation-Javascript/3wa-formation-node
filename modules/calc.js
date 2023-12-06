const calc = function (a, b) {
  return a + b;
};

const multiply = function (a, b) {
  return a * b;
};

console.log(calc(1, 2)); 

// module.exports.calc = calc;

 // module.exports = { calc, multiply };
module.exports = calc;
