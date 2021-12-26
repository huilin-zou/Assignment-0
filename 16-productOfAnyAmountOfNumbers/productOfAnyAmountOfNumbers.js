function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var res = 1;

  for (var i = 0; i < args.length; i++) {
    res *= args[i];
  }
  return res;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
