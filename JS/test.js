function camelCase(sentenceCase) {
    var out = "";
    sentenceCase.split(" ").forEach(function (el, idx) {
        var add = el.toLowerCase();
        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
    return out;
}
export default camelCase;

// const [x, y] = readline().split(" ").map(n => +n);
// const [x1, y1] = readline().split(" ").map(n => +n);
// if (x < x1) {
//     console.log("Right")
// } else if (x >= x1) {
//     console.log("Left")
// }


// export function solver(n) {
//
//     const str = n.toString(2);
//     let g = 0
//     for (let i = 0; i < str.length; i++) {
//         if (num[i] === "1") {
//             g = g + 1
//         }
//     }
//     return g
//
// }
//
// console.log(solver(3))
//
//


// const num = readline();
// m = 1
// while (num >= m) {
//     for (let i = 1; i < num + 1; i++) {
//         console.log(i * m, end = ' ')
//     }
//     console.log()
//     m = m + 1
// }

// const num = readline();
// let g = 0
// let y = 0
// let r = 0
// for (let i = 0; i < 5; i++) {
//     if (num[i] === "G") {
//         g = g + 1
//     } else if (num[i] === "Y") {
//         y = y + 1
//     } else {
//         r = r + 1
//     }
// }
// if (r >= 3 || g === 0) {
//     console.log("nakhor lite")
// } else if (r >= 2 && y >= 2) {
//     console.log("nakhor lite")
// } else {
//     console.log("rahat baash")
// }


// const input = readline().split("");
//
// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }
// const output = input.filter((e1) => isPrime(e1));
// console.log(output.JSON.stringify(" "))


// const num = +readline();
// if (num === 1){
//     console.log("0")
// } else{
//     let array = [];
//     array[0] = 0;
//     array[1] = 1;
//     for (let i = 2; i < num; i++) {
//         array[i] = array[i - 2] + array[i - 1];
//     }
//     console.log(array.join(', '))
// }


// `const count = +readline();
// const a="o".repeat(count)
// console.log("W"+a+"w!");
// `

// const count = +readline();
// for (let i = 0; i < count; i++) {
//     console.log("man khoshghlab hastam");
// }
// const [x1, y1, x2, y2] = readline().split(" ").map(n => +n);
// if (x1 === x2 ){
//     console.log("Vertical")
// } else if (y1 === y2) {
//     console.log("Horizontal")
// } else {
//     console.log("Try again")
// }

// const A = +readline();
// const B = +readline();
// const C = +readline();
//
// if ((A % 2 === 0) || (B % 2 === 0 && C % 2 === 0) ){
//     console.log('good');
// } else {
//     console.log('bad');
// }