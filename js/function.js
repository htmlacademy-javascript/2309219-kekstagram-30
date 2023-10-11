const checkLength = (string, allowedLength) => string.length <= allowedLength;


const checkPalindrome = function (string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  return normalizedString === normalizedString.split('').reverse().join('');
};

const extractNumbers = function (arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return result;
};

