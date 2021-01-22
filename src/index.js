
// You should implement your task here.

module.exports = function towelSort (matrix = '') {
  if (matrix == '') {
    return [];
  };
  
  let newArr = matrix;
  for (i = 1; i < newArr.length; i = 2*i+1) {
    newArr[i] = newArr[i].reverse();
  };

  for (i = 1; i < newArr.length; i++) {
    newArr[0] = newArr[0].concat(newArr[i]);
  }
  let result = newArr[0];
  return result;
}
