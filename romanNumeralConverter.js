function convertToRoman(num) {
  const numberLength = num.toString().length;
  let numberToReturn
  if (numberLength === 1) {
    numberToReturn = getRomanLetter(num)
  } else if (numberLength === 2) {
    let numberString = num.toString()
    let decimalNumber = ''

    for (let i = 0; i < numberString.length; i++){
      if (i === 0) {
        decimalNumber += getRomanLetter(numberString.charAt(i),true)
      } else {
        decimalNumber += getRomanLetter(numberString.charAt(i))
      }
    }

    numberToReturn = decimalNumber
  } else if (numberLength === 3) {
    let numberString = num.toString()
    let hundredsNumber = ''

    for (let i = 0; i < numberString.length; i++){
      if (i === 0) {
        hundredsNumber += getRomanLetter(numberString.charAt(i), false, true)
      } else if (i === 1) {
        hundredsNumber += getRomanLetter(numberString.charAt(i), true)
      } else {
        hundredsNumber += getRomanLetter(numberString.charAt(i))
      }
    }
    
    numberToReturn = hundredsNumber
  } else if (numberLength === 4) {
    let numberString = num.toString()
    let thousandsNumber = ''

    for (let i = 0; i < numberString.length; i++){
      if (i === 0) {
        thousandsNumber += getRomanLetter(numberString.charAt(i), false, false, true)
      } else if (i === 1) {
        thousandsNumber += getRomanLetter(numberString.charAt(i), false, true)
      } else if (i === 2){
        thousandsNumber += getRomanLetter(numberString.charAt(i), true)
      } else {
        thousandsNumber += getRomanLetter(numberString.charAt(i))
      }
    }
    
    numberToReturn = thousandsNumber
  }
 return numberToReturn;
}

function getRomanLetter(int, isDec = false, isHun = false, isThousand = false) {
  if (!isDec && !isHun && !isThousand) {
    switch (parseInt(int)) {
      case (0): {
        return ''
      }
      break
      case(1):
        return 'I'
        break
      case(2):
        return 'II'
        break
      case(3):
        return 'III'
        break
      case(4):
        return 'IV'
        break
      case(5):
        return 'V'
        break
      case(6):
        return 'VI'
        break
      case(7):
        return 'VII'
        break
      case(8):
        return 'VIII'
        break
      case(9):
        return 'IX'
        break
    }
  } else if (isDec) {
    switch (parseInt(int)) {
      case (0): {
        return ''
      }
      break
      case(1):
        return 'X'
        break
      case(2):
        return 'XX'
        break
      case(3):
        return 'XXX'
        break
      case(4):
        return 'XL'
        break
      case(5):
        return 'L'
        break
      case(6):
        return 'LX'
        break
      case(7):
        return 'LX'
        break
      case(8):
        return 'LXXX'
        break
      case(9):
        return 'XC'
        break
    }
  } else if (isHun) {
    switch (parseInt(int)) {
      case (0): {
        return ''
      }
      break
      case(1):
        return 'X'
        break
      case(2):
        return 'XX'
        break
      case(3):
        return 'XXX'
        break
      case(4):
        return 'CD'
        break
      case(5):
        return 'D'
        break
      case(6):
        return 'DC'
        break
      case(7):
        return 'DCC'
        break
      case(8):
        return 'DCCC'
        break
      case(9):
        return 'CM'
        break
    }
  } else if (isThousand) {
    switch (parseInt(int)) {
      case (0): {
        return ''
      }
      break
      case(1):
        return 'M'
        break
      case(2):
        return 'MM'
        break
      case(3):
        return 'MMM'
        break
      case(4):
        return 'CD'
        break
      case(5):
        return 'D'
        break
      case(6):
        return 'DC'
        break
      case(7):
        return 'DCC'
        break
      case(8):
        return 'DCCC'
        break
      case(9):
        return 'XC'
        break
    }
  }
}

convertToRoman(3999);

// Second solution
function convertToRoman(num) {
  const obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let str = ''
  for (const roman in obj) {
    while (obj[roman] <= num) {
      str += roman
      num -= obj[roman]
    }
  }
 return str;
}

