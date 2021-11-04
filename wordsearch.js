const transpose = function(matrix) {
    let newArr = [];
    
    // create the arrays equal to the number of elements in the first array
    for (let i = 0; i < matrix[0].length; i++) {
      newArr.push([]);
    }
    
    // iterate though the elements of the original array
    for (let i = 0; i < matrix.length; i++) {
    
      //go through all the elements and switch j and i
      for (let j = 0; j < matrix[i].length; j++) {
        newArr[j].push(matrix[i][j]);
      }
    }
      
    return newArr;
  };
  
  const reverseString = function(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  };
  
  const verticalJoin = function(letters) {
    const transposedArr = transpose(letters);
    return transposedArr.map(ls => ls.join(''));
  };
  
  const wordSearch = (letters, word) => {
    if (!letters[0]) {
      return false;
    }
  
    const horizontalJoinedWords = letters.map(ls => ls.join(''));
    for (const l of horizontalJoinedWords) {
      if (l.includes(word)) return true;
    }
  
    const reversedWords = horizontalJoinedWords.map(word => reverseString(word));
    for (const l of reversedWords) {
      if (l.includes(word)) return true;
    }
  
    const transposedWords = verticalJoin(letters);
    for (const l of transposedWords) {
      if (l.includes(word)) return true;
    }
  
    const reversedTransposedWords = transposedWords.map(word => reverseString(word));
    for (const l of reversedTransposedWords) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;