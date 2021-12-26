class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (!nums.includes(target)) {
      return false;
    }
    var midIdx = Math.floor(nums.length / 2);
    var midVal = nums[midIdx];
    if (midVal === target) return true;
    else {
      if (midVal > target) {
        return this.binarySearch(nums.slice(0, midIdx), target);
      } else {
        return this.binarySearch(nums.slice(midIdx + 1), target);
      }
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
