function pairSum(nums, target) {
  // Insert code here;
  try {
    if (nums.length <= 1) {
      throw error;
    }
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return true;
      }
    }
    return false;
  } catch (error) {
    throw new error();
  }
}

// Do not edit this line;
module.exports = pairSum;
