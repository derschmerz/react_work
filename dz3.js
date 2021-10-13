

console.log("кот" > "код") //true т больше чем д
console.log("2" + 2 * "2") //24 сложение сцепляет, текст стоит впереди, умножение мат.действие 
console.log(undefined == null) //true равны при нестрогом равенстве(правило)
console.log(undefined != null) //false
console.log(null == 0) //false null == только undifined
console.log(2 > "3") //false
console.log(null - false + true) //1  0-0+1
console.log(1 / "l") //NaN
console.log("2" * "3") //6 умножение -> мат. действие
console.log(4 + 5 + "O") //9O первое действие-мат форма, 2-е прицепляется текст
console.log("l" + 4 + 5) //145 т.к на первом месте стоит текст
console.log("4" - 2) // 2 для минуса только мат. действие
console.log("4" - "4x") //NaN нельзя вычесть из цифры текст
console.log('23' == 23) //true
console.log(null == false) //false null == только undifined
console.log(" -4 "/ 0 + 1) //-infinity деление на 0
console.log(null + 1) // 1
console.log(undefined + null) //NaN undefined не число NaN+0
console.log(1 === '1') //false не строгое равенство, 2ая - число
console.log('2' > 10) //false 2>10
console.log(NaN == undefined) //false == только null