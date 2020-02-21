'use strict';
var name = prompt("please enter your name");
var score = 0;

alert("hello  " + name + "  welcome to my website"); 



function myName (){
    var name2 = prompt("is my name Ibrahim? please answer with yes or no or y/n");
    name2.toUpperCase()
    switch (name2){
    case 'YES':
        score ++;
        alert('correct answer');
    case 'Y':
    score ++;
    alert('correct answer');
    
    break;
    case 'NO':
    case 'N':
    break;
    }

}
function myAge (){
    var age = prompt("is my age above 40?please answer with yes or no or y/n");
    switch(age.toLowerCase()){
    case 'yes':
        score ++;
        alert('correct answer');
    
    case 'y':
    score ++;
    alert('correct answer');
    
    break;
    case 'no':
    case 'n':
    break;
    }
    


}

function myMajor(){

    var major = prompt("did i study civil engineering ?please answer with yes or no or y/n");
    switch (major.toLowerCase()){
    case 'yes':
        score ++;
        alert('correct answer');
    
    case 'y':
    score ++;
    alert('correct answer');
    
    break;
    case 'no':
    case 'n':
    break;
    }



}


function myCar(){

    var car = prompt("do i like cars?please answer with yes or no or y/n" );
    switch (car.toLowerCase()){
    case 'yes':
        score ++;
        alert('correct answer');
    
        case 'y':
    
    score ++;
    alert('correct answer');
    
    break;
    case 'no':
    case 'n':
    break;
    }

}

function myHop(){
    var hope = prompt("do i like trying new things ?please answer with yes or no or y/n");
switch (hope.toLowerCase()){
case 'yes':
    score ++;
    alert('correct answer');

    case 'y':
score ++;
alert('correct answer');

break;
case 'no':
case 'n':
break;
}
}

function favNum (){
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
          num = Number(prompt('enter number between 1-6'));
     }else if (num > myNum){
         alert('too high try again');
          num = Number(prompt('enter number between 1-6'));
     }
     attemptTime ++;
    }
    
}

function favCars(){
    var myCars = ['nissan','subaro','marcedes','toyota','opel','lada','skoda'];
    var yourGess = prompt('i have alot of fav car can you gess one of them');
    var attemptTime = 1;
    var y=0;
        for(var i = 0 ; i< myCars.length ; i++){
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
}

myName();
myAge();
myMajor();
myCar();
myHop();
favNum();
favCars();
alert ('your score is'+ score +'out of 7');