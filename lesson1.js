function reverseStr (str) {
    let input = str.split("")
    let strToArr = input.reverse()
    let output = strToArr.join("")
    return output
}

reverseStr("abcdef")