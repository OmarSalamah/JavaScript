// age of user
let name = 'omar';
let age = 22;
const yearofbirth= 2001;

console.log(yearofbirth);

age=23;
console.log(age);



console.log(typeof age);

console.log(typeof name);

//////////boolean if it true or not 

let a1 = 2>3;
console.log (a1);

let a2 = 2<3;
console.log (a2);

console.log(typeof a1);

//////////// string 


let message = ' welcome to my world ';

console.log(typeof message);

///////////  Template Literals
let message1 = `welcome to my world` ;

console.log( message1);

//////// undified 
 let xc;
 console.log(xc);

 ////// number 

 let value = -7;
 console.log(typeof value);
 console.log(value);


 /////////// nan
console.log(value * 'as');

///////////////// null

let value1 =null;
console.log(value1);

///////////// string 

let lan = " hi everyone";
console.log(lan);
console.log(lan.length);
////////////////
let lan1= lan  +" in java";

console.log(lan1);
//////////////// brcket notation

 console.log(lan[5]);

 /////////// Arryas
 let colors = ['red','green','blue'];

 console.log(colors);
 console.log(colors[2]);

 console.log(colors.length);


 ///////////
 console.log(colors.includes('red'));
 console.log(colors.includes('black'));

/////////////

colors.unshift('black');
colors.unshift('pink');
console.log(colors);

colors.shift();
console.log(colors);

colors.push('pink');
colors.push('white');
console.log(colors);

colors.pop();
console.log(colors);


console.log(Array.isArray(colors));

////////////////

let result = message.split(' ');
console.log(result);
/////// if 



let age1 = 15;

if (age1<12){

    console.log(' sorry you cannt join' );
}
 else {
    console.log('welcome');
 }

//////////////////////
let colornum = 1;

switch(colornum) {

case 1: 
 console.log('red')
  break;
case 2: 
 console.log('blue')
 break;
case 3: 
 console.log('black')
 break;

default :
console.log('else')
 break;

}

/////////// loop

for(let i = 1; i<=5;i++){

    console.log(1);
}

for(let i = 5; i>=1;i--){

    console.log(1);
}

////////////////////////

const m1 = ' welcome';

for (const iterator of m1) {
    console.log(iterator);
}

let i =0;
while(i<3){
    console.log('blue');
    i++;
}



function print(){

    console.log('blue');

    console.log(' red');
    console.log('green');
}

print();