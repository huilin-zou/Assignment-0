function isPalindrome(word) {
  // Insert code here;
 var arr=word.split('');
 var reversed=arr.slice().reverse();

var res;
 for(var i=0;i<arr.length;i++){

  if(arr[i]==reversed[i])
  res=true;
  else
  res=false;
 }
 return res;
}
 
// Do not edit this line;
module.exports = isPalindrome;