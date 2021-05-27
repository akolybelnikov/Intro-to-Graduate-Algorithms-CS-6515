// DPV 6.4
const str = "Pebbling checkerboard. We are given checkerboard which has rows and columns, and has integer written each square."

const withSpaces = /[^A-Za-z ]/gi
const withoutSpaces = /[^A-Za-z]/gi
const modified = str.replace(withoutSpaces, '').toLowerCase()
const dict = new Set(str.replace(withSpaces, '').toLowerCase().split(' '))
console.log(dict)

function findWords(s) {
  let result = ''
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    temp += s[i]
    if (dict.has(temp)) {
       result += `${temp} `
       temp = ''
    }
  }
  return result
}

findWords(modified)