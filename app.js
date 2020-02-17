'use strict';
var name = prompt("please enter your name");

alert("hello "+name+" please answer with yes or no or y/n"); 
var name2 = prompt("is my name Ibrahim?");
console.log(name2);
name2.toUpperCase()
console.log(name2);
switch (name2){
case 'YES':
    console.log(name2);
case 'Y':
console.log(name2);
break;
case 'NO':
    console.log(name2);
case 'N':
console.log(name2);
break;
}

var age = prompt("is my age above 40?");
switch(age.toLowerCase()){
case 'yes':
    console.log(age);
case 'y':
console.log(age);
break;
case 'no':
    console.log(age);
case 'n':
console.log(age);
break;
}

var major = prompt("did i study civil engineering");
switch (major.toLowerCase()){
case 'yes':
    console.log(major);
case 'y':
console.log(major);
break;
case 'no':
    console.log(major);
case 'n':
console.log(major);
break;
}

var car = prompt("do i like cars?" );
switch (car.toLowerCase()){
case 'yes':
    console.log(car);
case 'y':
console.log(car);
break;
case 'no':
    console.log(car);
case 'n':
console.log(car);
break;
}

var hope = prompt("do i like trying new things ?");
switch (hope.toLowerCase()){
case 'yes':
    console.log(hope);
case 'y':
console.log(hope);
break;
case 'no':
    console.log(hope);
case 'n':
console.log(hope);
break;
}
alert(name +"welcom to my information page");