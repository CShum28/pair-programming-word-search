const transpose = function (matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let colArr = [];
    for (let j = 0; j < matrix.length; j++) {
      colArr.push(matrix[j][i]);
    }
    resultArr.push(colArr);
  }
  return resultArr;
};

const wordSearch = (letters, word) => {
  // checks for forwards
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let letters of horizontalJoin) {
    if (letters.includes(word)) {
      return true;
    }
  }
  // checks for backwards
  for (let reverseArrayOfLetters of letters) {
    const reverseLetters = reverseArrayOfLetters.reverse().join("");
    if (reverseLetters.includes(word)) {
      return true;
    }
  }

  // checks for down
  const transposeWordSearch = transpose(letters);
  const transposeHorizontalJoin = transposeWordSearch.map((ls) => ls.join(""));
  for (let letters of transposeHorizontalJoin) {
    if (letters.includes(word)) {
      return true;
    }
  }

  // checks for up
  for (let reverseArrayOfLetters of transposeWordSearch) {
    const reverseLetters = reverseArrayOfLetters.reverse().join("");
    if (reverseLetters.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
