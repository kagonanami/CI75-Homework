//1
function reverseStr (str) {
    let input = str.split("")
    let strToArr = input.reverse()
    let output = strToArr.join("")
    return output
}

reverseStr("abcdef")

//2
const input = [1, 2, 3, 5, 4, 2, 6, 4];
const noRepeatSet = new Set(input);
const result = [...noRepeatSet];
console.log(result)