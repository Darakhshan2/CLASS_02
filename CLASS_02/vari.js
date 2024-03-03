"use strict";
//  fundamental of typescript
// topic 1 : variable
/* behaviour of code : line by line execution and  top to bottom
 variable : store values in a memory
 = --> assignment operator used to assign value
 case sensitive => jis case mn hum variable ko declare kren gy wohi case console mn likhen gy
 1.camel case : camelCase
 2.snake case : snake_case
 3. pascalcase: PascalCase
 ; = statement terminator break the line

*/
let person = " darakhshan";
console.log(person);
person = "darakhshan junaid";
console.log(person);
// TOPIC 2 : STRONG TYPING IN TS
/*
 if we use "" or '' this also consider as string no matter what value it has
 Data : has multiple types "string", number: any time of number boolean: either is true or false
 Typeinference : typescript khud type set krleta hai khud assume kr ley ga
 strongtype = data type variable ki defined kren gy manually

  */
//let fullName ="darakhshan"; yahan wo error dy ga bcz usny typeinference  sy khud type assume ho gi
//fullName =10
let name1 = "darakhshan"; // all type of text
let age = 18; // all type of number
let isMaried = false; // 2 types
let abc = undefined; //hai to store krdo otherwise undefined
let xyz = null; // as soon as possible data aye ga data add krskty hen
// ADVANCE VARIABLE
// const = unchangeable value 
//let pi = 3.14
//pi = 7
const pi = 3.14; // unapdatable
