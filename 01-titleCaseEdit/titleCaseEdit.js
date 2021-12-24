function titleCaseEdit(title) {
  // Insert code here;

  const titleArray = title.split(" "); //split up the title
  const newarray = []; //store splited up words into array
  let joinarray = []; //put words together into a sentence

  for (var i = 0; i < titleArray.length; i++) {
    var word = titleArray[i];
    word = word[0].toUpperCase() + word.substring(1);

    newarray[i] = word;

    joinarray = newarray.join(" ");
  }
  return joinarray;
}

// Do not edit this line;
module.exports = titleCaseEdit;
