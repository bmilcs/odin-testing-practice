export default function caesarCipher(string, shift = 23) {
  // convert string to array
  const stringArr = string.split("");

  // convert each character to a numerical value
  const charCodesArr = stringArr.map((character) => {
    const charCode = character.charCodeAt(0);
    let newCharCode;

    if (isLowerCaseLetter(charCode))
      newCharCode = shiftLowerCaseLetter(charCode, shift);
    else if (isUpperCaseLetter(charCode))
      newCharCode = shiftUpperCaseLetter(charCode, shift);
    else newCharCode = charCode;

    return String.fromCharCode(newCharCode);
  });

  return charCodesArr.join("");
}

const isLowerCaseLetter = (charCode) => {
  return charCode >= 97 && charCode <= 122 ? true : false;
};

const isUpperCaseLetter = (charCode) => {
  return charCode >= 65 && charCode <= 90 ? true : false;
};

const shiftLowerCaseLetter = (charCode, shift) => {
  let newCharCode = charCode + shift;
  // if letter + shift beyond the bounds of lowercase charCodes
  if (newCharCode > 122) {
    // wrap letters extending beyond 122, starting at 97
    const shiftRemainder = newCharCode - 123;
    newCharCode = 97 + shiftRemainder;
  }
  return newCharCode;
};

const shiftUpperCaseLetter = (charCode, shift) => {
  let newCharCode = charCode + shift;
  // if new char code is beyond the bounds of uppercase charCodes
  if (newCharCode > 90) {
    // wrap letters extending beyond 90, starting at 65
    const shiftRemainder = newCharCode - 91;
    newCharCode = 65 + shiftRemainder;
  }
  return newCharCode;
};
