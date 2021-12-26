function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var set1 = new Set();

  for (var i = 0; i < args.length; i++) {
    for (let elem of args[i]) {
      set1.add(elem);
    }
  }

  return set1;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
