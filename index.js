// ЗАДАНИЯ
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// Сделайте функцию, которая возвращает сумму двух чисел.

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.
//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
//  Дан массив с числами. Выведите последовательно его элементы.
//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
// function funk(num) {
//     return num*num*num
// }
// alert (funk(3))
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// let result = round(sqrt(2));
// alert (result)
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}

// 	return num * num;
// }

// alert( func(10) );
// alert( func(-5) );
// function func(num) {
// 	let sum = 0;

// 	for (let i = 1; i <= num; i++) {
// 		sum += i;

// 	}
//     return sum;
// }

// alert( func(5) );

/* function funk() {
  let sum = 0;
  for (let i = 0; i > 10; i++) {
    sum = sum / 2;

    if (sum < 10) {
      return sum;
    }
  }
}
let result = funk(100);
console.log(result); */

// ЗАДАНИЯ
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function func (num) {
//     return num*num
// }
// console.log(func(5));

// Сделайте функцию, которая возвращает сумму двух чисел.
// function sum (num) {
//     return num + num
// }
// console.log(sum(5));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function func(num1, num2, num3) {
//   return (num1 - num2) / num3;
// }
// console.log(func(6, 2, 2));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function day (num){
// switch (num) {
// case 1:
// console.log("понедельник");
// break;
// case 2:
// console.log("Вторник");
// break;
// case 3:
// console.log("Среда");
// break;
// case 4:
// console.log("Четверг");
// break;
// case 5:
// console.log("Пятница");
// break;
// case 6:
// console.log("Суббота");
// break;
// case 7:
// console.log("Воскресенье");
// break;
// default: console.log("введите число от 1 до 7")
// }
// }
// day(8)

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const func = (num1, num2) => num1 === num2 ? console.log("true") : console.log("false");
// func(2, 2)

//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
// const func = (num1, num2) => (num1 + num2) > 10 ? console.log("true") : console.log("false");
// func(20, 2)

//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// const func = (num1) => (num1) > 0 ? console.log("true") : console.log("false");
// func(2)

//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// let isNumberInRange = (num1) => num1 > 0 && num1 < 10 ? true : false;
// // isNumberInRange(20)

// //  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [1, 2, 3, 4, -5, -56, 77]
// let arr2 = []
// for (i=0;i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         arr2.push (arr[i])
//     }
// }
// console.log(arr2);

//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

/* let num = 1
let getDigitsSum = (num) => {
    let sum = 0
    num = num.toString();
    for (i=0;i < num.length; i++){
    sum += +num[i]
    }
    return sum
} 
// console.log(getDigitsSum(350)) */

//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// for (;num <= 2020; num++) {
//     if (getDigitsSum(num) === 13){
//        console.log(num);
//     }
//    } */

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// let isEven = (num) => (!(num % 2) ? true : false);
// console.log(isEven(5));
// console.log(isEven(6));

// //  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// for (i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// let arr = []
// let getDivisors = (num) =>{
// for (i = 0; i <= num; i++)
//  if (num % i ==0)
//  arr.push(i)

// return arr
// }
// console.log(getDivisors(7))

//  Дан массив с числами. Выведите последовательно его элементы.

/* let arr = [1, 23, 222, 15]
for (i = 0; i < arr.length; i++)
console.log(arr[i]); */

//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// let num = 0;
// let getDigitsSum = (num) => {
//   let sum = 0;
//   num = num.toString();
//   for (i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   if (sum > 9) {
//     getDigitsSum(sum);
//   } else {
//     console.log(sum);
//   }
  
// };
// getDigitsSum(999999991);

/* Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10. */

/* let arr = [2, 5, 9, 15, 1, 4]
for (i=0;i<arr.length;i++) {
  if (arr[i] > 3 && arr[i] < 10) {console.log(arr[i]);}
} */

/* let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
for (i=0;i<arr.length;i++) {
  
  if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {console.log(arr[i]);}
}  */


// let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
// 	if (elem == 3) {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag === true) {
// 	console.log('есть');
// } else {
// 	console.log('нет');
// }


// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = ['a', 'b', 'u', 'd', 'e'];
// let num = false

// for (let elem of arr) {
//   if (elem =="c") {
//     num = true;
//     break; 
//   }
// }
// if (num === true) {
// 	console.log('есть');
//  } else {
// 	console.log('нет');
//  }

// console.log(Math.pow(2,10));
// console.log(Math.sqrt(245));

// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let result = 0
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for (i = 0; i <=6; i++) {
//   result = Math.sqrt(Math.pow(arr[i]+=1,3))
// }
// console.log(result);

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num) {
    return num * num
  })
});
console.log(result);
