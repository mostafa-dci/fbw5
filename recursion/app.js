// let sorage = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "object") {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (typeof arr[i][j] == "object") {
//                 for (let k = 0; k < arr[i][j].length; k++) {
//                     sorage += arr[i][j][k]
//                 }
//             } else {
//                 sorage += arr[i][j]
//             }
//         }
//     } else {
//         sorage += arr[i]
//     }
// }
let counter = 0;
let arr = [6, 9, 3, [10, 50, [6, 3, 9, 4], 60], "str", 5, 4]

function calculate(arry) {
    counter++;
    let storage = 0;
    for (let i = 0; i < arry.length; i++) {
        if (typeof arry[i] == "number") {
            storage += arry[i]
        } else {
            if (typeof arry[i] == "object") {
                storage += calculate(arry[i])
            }
        }
    }
    // the sum of all numbers in this array
    return storage
}
console.log(calculate(arr))
console.log(counter)

// calc the numbers fom 0 to N using recursion
// n = 10: 0+1+2+3+4+5+6+7+8+9+10 = 55
function calc(n) {
    if (n < 0) {
        return n + calc(n + 1)
    } else if (n === 0) {
        return n
    } else {
        return n + calc(n - 1)
    }
}
console.log(calc(10))