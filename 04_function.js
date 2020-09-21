// функции
//function declaration
// function greet(name){
//   console.log('Привет -', name);
// }
//
// greet('Лена')
//
// //Function expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 -', name);
// }
//
// greet2('Лена')
//
// console.dir(greet);

//Анонимные функции
// let counter=0
// const interval = setInterval(function() {
//   if (counter === 5) {
//       clearInterval (interval)
//   }else {
//       console.log(++counter);
//   }
//
//
// },1000)


// Стрелочная функция

// function greet(name){
//   console.log('Привет -', name);
// }
//
// greet('Лена')
//
// const arrow = (name) => {
//   console.log('Привет -', name);
// }
//
// arrow('Kate')

//Параметры  по умоляанию
// const sum = (a,b = 1) => a+b
//
// console.log(sum(41, 4));
//
// function sumAll(...all){
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
//
// }
//
// const res= sumAll(1, 2,3,4,5,6,7)
// console.log(res);


// Замыкания

// function createMember(name) {
//   return function(lastName) {
//     console.log(name +lastName);
//   }
// }
//
// const logWithLastName = createMember('Kate')
// console.log(logWithLastName);
// console.log(logWithLastName('Levkina'));
