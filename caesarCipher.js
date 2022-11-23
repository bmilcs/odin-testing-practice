export default function caesarCipher(string, shift = 23) {
  // convert string to array
  const stringArr = string.split("");

  // convert each letter to a numerical value
  const charCodesArr = stringArr.map((letter) => {
    const charCode = letter.charCodeAt(0);
    let newCharCode;

    // if letter = lowercase value
    if (charCode >= 97 && charCode <= 122) {
      newCharCode = charCode + shift;
      // if letter + shift beyond the bounds of lowercase charCodes
      if (newCharCode > 122) {
        // wrap letters extending beyond 122, starting at 97
        const shiftRemainder = newCharCode - 123;
        newCharCode = 97 + shiftRemainder;
      }
    }

    // if letter = uppercase value
    if (charCode >= 65 && charCode <= 90) {
      newCharCode = charCode + shift;
      // if new char code is beyond the bounds of lowercase charCodes
      if (newCharCode > 90) {
        // wrap letters extending beyond 90, starting at 65
        const shiftRemainder = newCharCode - 91;
        newCharCode = 65 + shiftRemainder;
      }
    }

    // if newCharCode hasn't been changed (not a letter) return original val
    if (!newCharCode) newCharCode = charCode;
    return String.fromCharCode(newCharCode);
  });

  return charCodesArr.join("");
}
