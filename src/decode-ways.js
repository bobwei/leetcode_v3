/**
 * @param {string} s
 * @return {number}
 */
/*
  if (s[n] can be decoded && s[n - 1] !== '0') {
    f(n) += f(n - 1)
  }
  if (s[n - 1:n] can be decoded && s[n - 1] !== '0') {
    f(n) += f(n - 2)
  }
*/
const canDecode = (str, i, j) => {
  const n = parseInt(str.slice(i, j), 10);
  if (n >= 1 && n <= 26 && str[i] !== '0') {
    return true;
  }
  return false;
};

const numDecodings = (s) => {
  if (!s.length) {
    return 0;
  }
  const f = [...Array(s.length)].map(() => 0);
  f[0] = (canDecode(s, 0, 1)) ? 1 : 0;
  for (let i = 1; i < s.length; i++) {
    if (canDecode(s, i, i + 1)) {
      f[i] += f[i - 1];
    }
    if (canDecode(s, i - 1, i + 1)) {
      const v = (i > 1) ? f[i - 2] : 1;
      f[i] += v;
    }
  }
  return f[s.length - 1];
};

console.log(numDecodings(''));
console.log(numDecodings('993'));
console.log(numDecodings('123'));
console.log(numDecodings('103'));
console.log(numDecodings('1234'));
console.log(numDecodings('0'));
console.log(numDecodings('01'));
console.log(numDecodings('101'));
console.log(numDecodings('001'));
console.log(numDecodings('010'));
