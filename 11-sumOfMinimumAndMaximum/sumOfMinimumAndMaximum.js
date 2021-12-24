function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min=Math.min.apply(Math,nums);
  var max=Math.max.apply(Math,nums);

  return min+max;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;