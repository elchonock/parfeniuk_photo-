// alert("Help me! I'm learning GULP!");

// function sumInput() {
//     let arr = [];
//     let input = prompt("number?", "");
    
//     while(input){
//         // if(isNaN(+input)){ // Infinity станет Infinity и добавится в массив
//         if(!isFinite(+input)){ // 
//             break;
//         } else {
//             arr.push(+input);
//         }        
//         input = prompt("number?", "");
//     }
//     if (arr.length >= 1){
//         console.log(arr);
//         return arr.reduce(function(a, b){return a+b;});
//     }
//     return "Ooops";
// }

// console.log(sumInput());

// let arr = [-1, 2, 3, -9];


// function getMaxSubSum(array) {
//     let maxSub = 0;
//     let partialSum = 0;
//     for (let i of array){
//         partialSum += i;
//         maxSub = Math.max(partialSum, maxSub);
//         if (partialSum < 0){
//             partialSum = 0;
//         }
//     }    
//     return maxSub;
// }

// console.log(getMaxSubSum(arr));


// function printNumbers(from, to){
//     let i = from;
//     setTimeout(function go(){console.log(i);
//     if (i < to) {
//         setTimeout(go, 1000);
//     }
//     i++;
//     }, 1000);
    
// }
// printNumbers(1, 5);


// function printNumbers(from, to){
//     setTimeout(function go(){
//         console.log(from);
//         if (from < to) {
//             setTimeout(go, 1000);
//         }
//         from++;
//         }, 1000);
    
// }
// printNumbers(1, 5);



// function printNumbers(from, to){
//     let intervalId = setInterval(function() {
//         console.log(from);
//         from++;
//         if (from > to){
//         clearInterval(intervalId);
//     }         
//     }, 1000);
       
// }
// printNumbers(1, 5);


// function printNumbers(from, to){
//     function go() {
//         console.log(from);
//         if (from < to) {
//         setTimeout(go, 1000);
//         from++;
//     }}
//     go();
    
// }
// printNumbers(1, 5);


// методы массивов
// 1
// function camelize(str){
//     let splStr = str.split("-");
//     let newStr = [];
//     splStr.forEach(item => {
//         (splStr.indexOf(item)) ? newStr.push(((item[0].toUpperCase()) + item.slice(1))) : newStr.push(item);
//     });
//     return newStr.join('');

// }

// function camelize(str){
//     return str.split("-")
//         .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
//         .join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// 2
// function filterRange(arr, a, b){ 
//     return arr.filter(item => (item >= a && item <= b));
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// 3

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i ++) {
//         let value = arr[i];
//         if (value < a || value > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// let arr2 = [5, 3, 33, 16, 17, 8, 45];
// filterRangeInPlace(arr2, 5, 17);
// console.log(arr);
// console.log(arr2);


// 4

// let arr = [5, 2, 1, -10, 8, 12, 25, 34];
// arr.sort((a,b)=>(a-b));
// arr.reverse();

// console.log(arr); // 8, 5, 2, 1, -10


// 5

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     return [...arr].sort();
// }
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);


// 6
// function Calculator() {
//     this.operators = {
//         "+": (a, b)=>(a + b),
//         "-": (a, b)=>(a - b),
//         "*": (a, b)=>(a * b),
//         "/": (a, b)=>(a / b),
//         "**": (a, b)=>(a ** b),
//     };

//     this.calculate = (str)=>{
//         let arrSplit = str.split(" ");
//         let a = +arrSplit[0];
//         let oper = arrSplit[1];
//         let b = +arrSplit[2];
//         if (!this.operators[oper]){return "invalid operator";}
//         return this.operators[oper](a, b);

//     };   
// }
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // 10
// console.log( calc.calculate("17 - 58") ); 
// console.log( calc.calculate("117 - 58") ); 
// console.log( calc.calculate("117 * 58") ); 
// console.log( calc.calculate("117 / 58") ); 
// console.log( calc.calculate("2 ** 3") ); 
// console.log( calc.calculate("2 *!* 3") ); 


// 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);
// console.log(names); // Вася, Петя, Маша


// 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let sasha = { name: "Саша", surname: "Барсук", id: 4 };

// let users = [ vasya, petya, masha, sasha ];

// let usersMapped = users.map(item => (
//         {
//             fullName: item.name + " " + item.surname,
//             id: item.id,
//         }
// )); 


// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // Вася Пупкин
// console.log( usersMapped[3].fullName ); 
// console.log( usersMapped ); 



// 9

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     users.sort((a, b) => (a.age - b.age)); 
// }

// sortByAge(arr);

// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя


// 10 Тасование Фишера — Йетса

// let arr = [1, 2, 3];

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let tmp = array[i];
//         let j = Math.floor(Math.random() * (i + 1));
//         array[i] = array[j];
//         array[j] = tmp;
//     }
// }

// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr);
// // arr = [2, 1, 3]


// 11

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users){
//     return users.reduce((a, b) => a + b.age, 0) / users.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


//12


// function unique(arr) {
//     let set = new Set(arr);
//     return [...set];
//   }
  

//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) ); // кришна, харе, :-O


