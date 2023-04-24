const aespa = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']

// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖';
// });
// console.log(aespa);

const aespa2 = aespa.map((item) => {
    return item + '💖';
});

console.log(aespa);
console.log(aespa2);