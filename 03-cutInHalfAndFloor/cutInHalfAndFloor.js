function cutInHalfAndFloor(num) {
  // Insert code here;
if(num%2==0)
return num/=2;

else{
let newNum= Math.round(num/2);
return newNum-=1;
}}

// Do not edit this line;
module.exports = cutInHalfAndFloor;