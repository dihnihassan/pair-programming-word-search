/////////////////////////////////////////
/// PAIRED PROGRAMMING @BRAD-WILLIAMS_DEV ////
////////////////////////////////////////


const transpose = matrix => {
  const result = [];
  const lError = "Every array's length should match the length of the first array. Please try again.";
  const matrixL = matrix[0].length;

  for (let i = 0; i < matrixL; i++) { // Loops through the first most inner arrays length
    const line = [];
    for (let j = 0; j < matrix.length; j++) { // Loops through array 
      line.push(matrix[j][i]);               // Pushes item at Matrix index j, index i to a new array made at beginning.
    }
    result.push(line); // Pushes the new array to the result array.
  }

  return result;

};

const wordSearch = (letters, word) => {

  if (!letters.length) {
    return false;
  }

  if (word.length < 3) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let verticle = transpose(letters);

  const verticleJoin = verticle.map(ls => ls.join(''));
  for (c of verticleJoin) {
    console.log(c);
    if (c.includes(word)) return true;
  }

  return false;

};

console.log(wordSearch([], 'SEIGNFELD'));

module.exports = wordSearch;