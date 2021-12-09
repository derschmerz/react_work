// 1. Реализовать таймер-функцию используя замыкания.
// Функция принимает два  аргумента начальное значение и значение завершения.
// Таймер движется назад.
// Пример:
// foo(start, end).
// При достижении точки завершения в консоль выводится значение таймера
// и сообщение о завершении работы таймера.

// let foo = function (start) {
//   return function (end) {
//     for (i = start; i > end; i--) {
//       console.log(i);
//     }
//     if ((i = end)) {
//       console.log(end, "Time is over");
//     }
//   };
// };
// const timer = foo(10);
// timer(1);


// * 2. Что выведет функция?
// function f() {
//   console.log(this); // Global 
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

// * 3. Можем ли мы изменить this дополнительным связыванием? нет
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

//* 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// console.log(bound);
// console.log(bound.test); // undefind, bind не копирует контекст, только функцию

//* 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему? Контекст  не скопирован, нужно использовать bind и указать контекст для него

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//* 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func
// всегда указывал на value из переменной elem.
// var elem = {value: "Привет"}

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }


// func = func.bind(elem)
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 9. Есть функция которая складывает три числа.
// const sum = (a, b) => a + b
// Выполните каррирование.

// //! DZ 17/11

// class People {
//     constructor(name,surname) {
//         this.name = name;
//         this.surname = surname;
//     }

// getFullName() {
//          return `Имя: ${this.name}, Фамилия: ${this.surname}`
//       }
// }

//       const firstPeople = new People("ivan", "Petrov");
      
//       console.log(firstPeople.getFullName());
             


//       class Worker extends People {
//         constructor(name,surname, rate, days) {
//                 super(name,surname);
//                 this.rate = rate;
//                 this.days = days;
//               }
//               getSalary() {
//                   return `${this.getFullName()}, Зарплата: ${this.rate*this.days} руб.`
//               }

//               getName() { 
//                 return this.name;
//             };
            
//             getSurname() { 
//                 return this.surname;
//             };
//             getRate() {
//                 return this.rate
//             }
//             getDays() {
//                 return this.days
//             }

//             setRate(newRate) {
//                 return this.rate = newRate
//             }
//             setDays(newDays) {
//                 return this.days = newDays;
//             }
//       }

// const firstWorker = new Worker ("Petr", "Petrov", 1500, 20)
// const secondWorker = new Worker ("Semen", "Petrov", 1900, 2)
// var worker = new Worker('Иван', 'Иванов', 10, 31)
// console.log(firstWorker.getSalary());
// console.log(secondWorker.getSalary());


// console.log(firstWorker.name); 
// console.log(firstWorker.surname); 
// console.log(firstWorker.getFullName()); 
// console.log(firstWorker.rate); 
// console.log(firstWorker.days); 
// console.log(firstWorker.getSalary()); 

/* 2. */

// class Boss extends Worker {
//     constructor (name,surname, rate, days, workers) {
//         super(name,surname,rate,days)
//         this.workers = workers;

//     }
//     getSalary () {
//         return `${this.getFullName()}, Зарплата: ${this.rate*this.days*this.workers} руб.` 
//     }
// }

// const boss = new Boss ('Иван', 'Иванов', 10, 31, 10 )
// console.log(boss.name); //выведет 'Иван'
// console.log(boss.surname); //выведет 'Иванов'
// console.log(boss.getFullName()); //выведет 'Иванов Иван'
// console.log(boss.rate); //выведет 10
// console.log(boss.days); //выведет 31
// console.log(boss.workers); //выведет 10
// console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10



/*  3. */
// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31



/* 4 */
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

/* 5 */


// Реализуйте класс MyString, который будет иметь следующие методы: 
// метод reverse(),который параметром принимает строку, а возвращает ее в перевернутом виде, 
//  метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
//  сделав ее первую букву заглавной и метод ucWords, 
//  который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//     reverse(str) {
//         return [...str].reverse().join("");
//     }
//     ucFirst(str) {
//         return str[0].toUpperCase()+ str.slice(1)
//     }
//     ucWords(str) {
//         return str.ucWords()
//     }
// }



// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


//! DOM 

// let p = document. createElement('p');
// p.innerHTML = "пример";
// p.classList.add('main', "green")
// console.log(p);


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// console.log(elem1);

// let link = document.querySelector('.www');
// console.log(link)

// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// let button3 = document.querySelector('#button3')

// // button1.addEventListener('mouseover', function() {
// // 	alert('1');
// // });
// // button1.addEventListener('mouseout', function() {
// // 	alert('1');
// // });
// // button1.addEventListener('click', function() {
// // 	alert('1');
// // });


// button2.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// function func1() {
// 	alert(2);
// }

// function func2() {
// 	alert(3);
// }

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let elem1   = document.querySelector('#elem1');
let elem2   = document.querySelector('#elem2');

// button.addEventListener('click', function() {
//     let sum = Number(elem1.innerHTML) + Number(elem2.innerHTML)
// 	alert(sum);
// });

button1.addEventListener('click', function() {
	elem1.innerHTML = `!` + Number(elem1.innerHTML) + `!` ;
});
button2.addEventListener('click', function() {
	elem2.innerHTML = 'Пока';
});

