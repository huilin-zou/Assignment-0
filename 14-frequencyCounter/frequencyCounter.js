function frequencyCounter(word) {
  // Insert code here;
  let obj = new Object();

  for (let i = 0; i < word.length; i++) {
    if (word[i] in obj) {
      obj[word[i]]++;
    } else {
      obj[word[i]] = 1;
    }
  }

  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;
