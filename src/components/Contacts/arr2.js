// let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]

// function uniqueArr(arg) {
//     const array = []
//     for (let i = 0; i < arg.length; i += 1) {
//         if (!array.includes(arg[i])) {
//             array.push(arg[i])
//         }
//     }
//     return array
// }
// console.log(uniqueArr(arr))


// function uniqueArr(arr_arg) {
//     const arr2 = new Set(arr_arg)
//     return arr2
// }
// console.log(uniqueArr(arr))
// function newUniqeArr(arg) {
//     return arg.filter((a, i) => {
//         return arg.indexOf(a) === i
//     })

// }
// console.log(newUniqeArr(arr))
// const word = 'madam'
// function isPalindrom(arg) {
//     const reverced = arg.split('').reverse().join('')
//     return reverced === arg;
// }
// console.log(isPalindrom(word))

function factorial(num) {
    let fNum = 1
    for (let i = num; i > 1; i -= 1) {
        fNum *= i;
    }
    return fNum
}
console.log(factorial(8))