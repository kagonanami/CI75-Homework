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

//3
const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

function arrayUnique(array){
    array.sort();

    let max = [0,0];
    let count = 1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) 
        ++count;
        else{
             if (max[1] < count){ 
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( `Phần tử ${max[0]} xuất hiện nhiều nhất với ${max[1]} lần`);
}

arrayUnique(arr)

