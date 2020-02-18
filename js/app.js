'use strict';
var name = prompt("please enter your name");
var score = 0;
alert("hello "+name+" please answer with yes or no or y/n"); 
var name2 = prompt("is my name Ibrahim?");
console.log(name2);
name2.toUpperCase()
console.log(name2);
switch (name2){
case 'YES':
    console.log(name2);
    score ++;
    alert('correct answer');
case 'Y':
console.log(name2);
score ++;
alert('correct answer');

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
    score ++;
    alert('correct answer');

case 'y':
console.log(age);
score ++;
alert('correct answer');

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
    score ++;
    alert('correct answer');

case 'y':
console.log(major);
score ++;
alert('correct answer');

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
    score ++;
    alert('correct answer');

    case 'y':
console.log(car);

score ++;
alert('correct answer');

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
    score ++;
    alert('correct answer');

    case 'y':
console.log(hope);
score ++;
alert('correct answer');

break;
case 'no':
    console.log(hope);
case 'n':
console.log(hope);
break;
}
alert(name +"welcom to my information page");
// var i = 2;
// var number = prompt("please enter number between 0-3");
// for (var i = 0; i < 3; i++) {
// if (i== true) {
//     alert('this is the correct answer');
//     score = score++
// } else if (i== false){
//     alert('try again');
//     var number = prompt("please enter number between 0-3");
// }    
// }
console.log(score);
var myNum = 3;
var num = Number(prompt('enter number between 1-6'));
var attemptTime = 1;
while (attemptTime < 5) {
 if (num == myNum){
     alert('this is my number');
     score ++;
     break;

 }else if (num < myNum){
     alert('too low try again');
     var num = Number(prompt('enter number between 1-6'));
 }else if (num > myNum){
     alert('too high try again');
     var num = Number(prompt('enter number between 1-6'));
 }
attemptTime = attemptTime ++;
}


var myCars = ['nissan','subaro','marcedes','toyota','opel','lada','skoda'];
var yourGess = prompt('i have alot of fav car can you gess one of them');
var attemptTime = 1;
var y=0;
    for(var i = 0 ; i< myCars.length ; i++){
        console.log(i);
    if (yourGess == myCars[0]){
        alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
        alert('you have acorrect answer' +  yourGess);
        score ++;
        break;
        
    }else if (yourGess == myCars[1]){
        alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
        alert('you have acorrect answer' +  yourGess);
        break;}
        else if (yourGess == myCars[2]){
            alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
            alert('you have acorrect answer' +  yourGess);
            break;
        }else if (yourGess == myCars[3]){
            alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
            alert('you have acorrect answer' +  yourGess);
            break;}
            else if (yourGess == myCars[4]){
                alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
                alert('you have acorrect answer' +  yourGess);
                break;}
                else if (yourGess == myCars[5]){
                    alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
                    alert('you have acorrect answer' +  yourGess);
                    break;}
                    else if (yourGess == myCars[6]){
                        alert('these are my fav cars nissan,subaro,marcedes,toyota,opel,lada,skoda');
                        alert('you have acorrect answer' +  yourGess);
                        break;}
    else if (yourGess !== myCars[i]){
        alert('this not frome my fav cars try again');
        var yourGess = prompt('i have alot of fav car can you gess one of them');
        y++;
    }
}
  
console.log(score);
alert ('your score is'+ score +'out of 7');