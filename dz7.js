// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map(item => {

// return item = item.length

// })

// console.log( vegetableLength ); // 7,4,7,8

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//     let result = [];
//     numbers.reduce(function(accum, current,i=0) {
//     return result[i]= accum + current;
// },0);
// return result
// }
// console.log(currentSums(numbers));

// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

/* // Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// var arr = [0, 1, 2, 3, 4, 5, 6, 7]; 
// let result = []
// function sumSeven(arr) {

  

//   var sum = arr.reduce(
//     function(sum, current){
//       return sum + current[1];
//     }, 0
//   ); 
//   console.log(sum) */
//   for (i=0;i<arr.length;i++)
//   return arr.reduce((a,b) => a + b)

//     if (el1 + el2 === 7)
//     {result.push([ el1 +":" + el2])}
// }
// console.log(sumSeven(arr)); */

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

/* var str = "Каждый охотник желает знать, где сидит фазан."; 
let array = []
const result = str.split(" ").reduce((acc, cur) => acc + cur[0], "")
    let arr2 = result
    
    console.log(result)
  console.log(arr2.split(','))
foo(array);  // [К,о,ж,з,г,с,ф]  */

// Перед вами переменная, содержащая строку. Напишите код, создащий массив,
// который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// var str = "JavaScript";

// // Ваш код

// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];

// // Ваш код

// foo(numerics); // [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// var a = [1,2,3];
// var b = [4,5,6];
// c = [7,8,9];
// function getArr(a, b, c) {

// // Ваш код

// }

// getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
// let arr = [[1, 2, 3], [4, 5], [6]]

// var result = arr.flat().reduce(function(accum, currernt) {
// 	return accum + currernt;
// });
// console.log(result);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let arr = [5, 2, 2, 4, 5, 6, 7]

// function Reverse(arr){
//   var arr2 = [];
//   for (i = 0; i < arr.length; i++){
//      arr2[i] = arr[(arr.length - 1) - i]
//   }
//   return arr2
// }
// console.log(Reverse(arr));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [5, 2, 2, 4, 5, 6, 7];
// let n = 1;
// let sum = arr.reduce(function (accum, current) {

//   if (accum > 10) {
//     return console.log(n);
//   } else {
//     n++;
//     return accum + current;
//   }
// });

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// let arr= [1,0,0,0,0]

// function arrayFill (symb,num){
// arr.fill(symb, 0, num);
// return arr
// }

//  console.log(arrayFill("x", 5))

/* 09/11/2021 */

// // Задача 1js.Pm.Lp.Fr

// // С помощью цикла for выведите в консоль числа от 1 до 100.

// for (i=0;i<=100;i++) {
//   console.log(i);
// }

// // Задача 2js.Pm.Lp.Fr

// // С помощью цикла for выведите в консоль числа от 11 до 33.

// for (i=11;i<=33;i++) {
//   console.log(i);
// }

// // Задача 3js.Pm.Lp.Fr

// // С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.

// for (i=0;i<=100;i=i+2) {
//   console.log(i);
// }

// // Задача 4js.Pm.Lp.Fr

// // С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

// for (i=1;i<=99;i=i+2) {
//   console.log(i);
// }

// // Задача 5js.Pm.Lp.Fr

// // С помощью цикла for выведите в консоль числа от 100 до 0.

// for (i=100;i>=0;i--) {
//   console.log(i);
// }

// Задача 1js.Pm.Lp.RLA

// Найдите произведение целых чисел от 1 до 20.
// let result =1
// for (i = 1; i <= 20; i++) {
//   result = result * i;
//   console.log(result);
// }

// Задача 2js.Pm.Lp.RLA

// Найдите сумму четных чисел от 2 до 100.
// let result =1
// for (i = 2; i <= 100; i++) {
//   result = result + i;
//   console.log(result);
// }
// Задача 3js.Pm.Lp.RLA

// Найдите сумму нечетных чисел от 1 до 99.

// let result =1
// for (i = 1; i <= 99; i=i+2) {
//   result = result + i;
//   console.log(result);
// }

// let result = 0
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result += arr[i]
// }
// console.log(result);

// Задача 4js.Pm.Lp.AFr

// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

// let result = 1
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result = result * arr[i]
// }
// console.log(result);

// Задача 5js.Pm.Lp.AFr

// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.

// let result = 0
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result = result + (arr[i]*arr[i])
// }
// console.log(result);

// Задачи
// Задача 6js.Pm.Lp.AFr

// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] >= 3 && arr[i] < 10){
//   console.log(arr[i])}
// }

// Задача 7js.Pm.Lp.AFr

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let result = 0
// let arr = [2, 5, 9, -15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0){
//     result += arr[i]
//   }
// }
// console.log(result)
// Задача 8js.Pm.Lp.AFr

// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let result = 0
// let arr = [2, 5, 9, 5, 1, 4];

// for (let i = 0; i < arr.length; i++) {

//    result = (result + arr[i])

// }
// result = result/arr.length
// console.log(result)

// Задача 9js.Pm.Lp.AFr

// Дан массив числами, например:

// let arr = [10, 20, 30, 50, 235, 3000];
// // Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// for (let i = 0; i < arr.length; i++) {
//   	if (arr[i].toString()[0] == 1 || arr[i].toString()[0] == 2 || arr[i].toString()[0] == 5){
//     console.log(arr[i])}
//   }

// Задача 10js.Pm.Lp.AFr

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = arr.length; i > -1; i--) {
//   console.log(arr[i]);
// }

// Задача 11js.Pm.Lp.AFr

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// let arr = [10, 1, 30, 50, 235, 3000]

// for (let i = 0; i < arr.length; i++) {
//   if (i === arr[i]) {
//     console.log(arr[i]);
//   }
// }

// Задача 12js.Pm.Lp.AFr

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

/* let arr = [10, 1, 30, 50, 235, 3000]

for (let i = 0; i < arr.length; i++) {
  
      document.write(arr[i]);
    } */

// Задача 13js.Pm.Lp.AFr

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

// Задача 14js.Pm.Lp.AFr

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// Задача 15js.Pm.Lp.AFr

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = 0

// for (let elem of arr) {
//   result =
// 	console.log(elem);
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let result = 0

// for (let key in obj) {
// result = result + obj[key]

// }
// console.log(result)

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0, j = 0; i <= 5; i++, j += 2) {
// 	console.log(i, j);
// }
// Задача 1js.Pm.Lp.Br

// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор,
// пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// let arr = [1, 2, 3, 4, 5, 0, 9];

// for (elem of arr) {
// if (elem == 0) {
//   break
// }
//   console.log(elem);
// }

// Задача 2js.Pm.Lp.Br

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

// let arr = [1, 2, 3, -4, 5, 0, 9];
// let result = 0;

// for (elem of arr) {

//    if (elem > 0) {
//     result += elem;
//    } else {
//       break
//   }

// }
// console.log(result);
// Задача 3js.Pm.Lp.Br

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
// let arr = [1, 2, 3, -4, 5, 0, 9];
// let i = -1;
// for (elem of arr) {

//   i++;
//     if (elem == 3) {
//    console.log(i);
//   }

//  }

// Задача 4js.Pm.Lp.Br

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.

let n = 0
let result = 1
for (let i = 0; i <= result; i++) {
  n++;
  if (result <= 100) {
  result = result + i;
  // console.log(i);
  // console.log(n);
  // console.log(result)
} else {
  break
}
console.log(n)
}

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
// let num = 5;
// let n = 0

// while (num <= 1000) {
// 	num = num * 3;
//   n++;
// }

// console.log(num);
// console.log(n);

// for (var num = 5, i = 0; num <= 1000; num = num * 3, i++);
// console.log(num, i);

// Задача 1js.Pm.Lp.Nsd

// С помощью двух вложенных циклов выведите на экран следующую строку:

// 111222333444555666777888999

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i);
//   }
// }

// Задача 2js.Pm.Lp.Nsd

// С помощью двух вложенных циклов выведите на экран следующую строку:

// 11 12 13 21 22 23 31 32 33
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i);
//   }
// }

// let arr = []

// for (i = 0; i <= 5; i++) {
//   arr[i] = i +1
// }
// console.log(arr);

// // ! this

// const Animal = function(options) {
//   this.name = options.name
//   this.color = options.color

//   // this.voice = function() {
//   //   console.log("Base voise from", this.name);
//   // }
// }

// Animal.prototype.voice = function() {
//   console.log("Base voise from", this.name)
// }

// const dog = new Animal({name: "rex", color: "white"})

// // dog.voice()

// // console.log(dog);
// // console.log(dog.color)

// const Cat = function(options) {
// Animal.apply()
// }

// const cat = new Cat ({name: "Murzik", color: "Blue", hasTail: true})