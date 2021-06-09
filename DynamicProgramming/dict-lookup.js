// DPV 6.4
function findWords(s, dict) {
    let result = ''
    let temp = ''
    let t = true
    for (let i = 0; i < s.length; i++) {
        temp += s[i]
        if (dict.has(temp)) {
            result += `${temp} `
            temp = ''
        }
    }
    if (temp != '') {
        t = false
    }
    return t ? [t, result] : [t, '']
}

module.exports = findWords