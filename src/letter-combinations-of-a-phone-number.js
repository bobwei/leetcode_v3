/**
 * @param {string} digits
 * @return {string[]}
 */
const dict = [
  ' ',
  ' ',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
];
const letterCombinations = (digits, output = [], path = [], startIndex = 0) => {
  if (!digits.length) {
    return [];
  }
  if (path.length === digits.length) {
    output.push(path.join(''));
    return output;
  }
  const digit = digits[startIndex];
  for (let i = 0; i < dict[digit].length; i++) {
    path.push(dict[digit][i]);
    letterCombinations(digits, output, path, startIndex + 1);
    path.pop();
  }
  return output;
};

console.log(letterCombinations(''));
console.log(letterCombinations('23'));
