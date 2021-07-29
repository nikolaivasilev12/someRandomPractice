function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const stringParts = str.split(' ')

  let decypheredString = ''
  for (let string of stringParts){
    let decypheredWord = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== '!' && string[i] !== '?' && string[i] !== '.') {
        const alphabetPosition = alphabet.indexOf(string[i].toLowerCase())
        let decypheredLetterPosition = alphabetPosition - 13
        if (decypheredLetterPosition < 0) {
          decypheredLetterPosition = alphabetPosition + 13
        }
        decypheredWord += alphabet[decypheredLetterPosition]
      } else {
        decypheredWord += string[i]
      }
    }
    decypheredString += decypheredString !== '' ? ' ' + decypheredWord : decypheredWord
  }
  const strToReturn = decypheredString.toUpperCase()

  return strToReturn;
}
