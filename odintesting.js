
function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  const len = string.length;
  const firstString = string[0].toUpperCase()
  const secondString = string.slice(1, len)

  return firstString + secondString
}

function reverseString(string) {
  const len = string.length;
  let newString = '';
  for (let i = len - 1;i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString
}

const calculator = {
  
  add(a, b) {
    return a + b
  },

  subtract(a, b) {
    return a - b
  },

  divide(a, b) {
    return a/b
  },

  multiply(a, b) {
    return a * b
  }

}

function caesarCipher(string, shift) {
  const len = string.length
  let caesarString = '';

  for (let i = 0; i < len; i++) {
    let charCode = string.charCodeAt(i)
    // Only shifts characters if character is alphabetic
    if (string[i].toUpperCase() != string[i].toLowerCase()) {
        charCode = charCode + shift
    }
    // Wraps if character reaches end of alphabet
    if (string[i] == string[i].toUpperCase() && charCode > 90) {
      charCode = charCode - 26
    } else if (charCode > 122) {
      charCode = charCode - 26
    }
    caesarString = caesarString + String.fromCharCode(charCode)
  }

  return caesarString
};

console.log(caesarCipher('xyz', 3))
module.exports = { sum, capitalize, reverseString, calculator, caesarCipher }