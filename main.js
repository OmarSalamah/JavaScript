const d = new Date(2020,9,17)

console.log(d.getDay);
console.log(d.getDate);
console.log(d.getMonth);


//////////////
const number = Math.ceil(9.12)
console.log(number);



/////////////////////
const number1 = Math.floor(9.12);
console.log(number1);

////////

const number2 = Math.round(9.12);
console.log(number2);

/////////
const number3 = Math.abs(-9.12);
console.log(number3);

////////////////
const number4 = [-3,5,6,8,9];
const num = Math.min(...number4);
console.log(num);
////////

const number5 = [-3,5,6,8,9];
const num2 = Math.max(...number5);
console.log(num2);

////////////////////

const str ='1.45';
const floatNumber= parseFloat(str);
console.log(floatNumber);

//////////////

const str1 ='1.45';
const floatNumber1= parseInt(str);
console.log(floatNumber1);
//////////////////////////
const number6= Math.trunc(1,43);
console.log(number6);

/////////////
const isInt= Number.isInteger(number6);
console.log(isInt);

/////////////////

function sq(number){
    if (isNaN(number)) 
    return 'INVALID '
return number*number
}

console.log(sq('a'))

///////////
const number7 = 2** 3;
console.log(number7);

/////////////
const squereroot = Math.sqrt(number7);
console.log(squereroot);

//////////////////
console.log(Math.sign(number7));


const rad = Math.random();
console.log(rad);

////////////////

function sum(firstNumber, secondNumber){
    return `(${firstNumber + secondNumber}]`
    }

    function sub(firstNumber, secondNumber){
    return `(${firstNumber - secondNumber}]`
    }
    console.log(sub (1, 2))


    /////////////////////////

    function operation(firstNumber, secondNumber, opCallback){
        return `[:[${opCallback(firstNumber, secondNumber)}]:]`
        }
        console. log(operation (5, 2, sum))
        /////////////

        function mul(firstNumber, secondNumber){
            return  firstNumber *secondNumber 
            }
            console.log(mul (1, 2))
/////////////////////////////////////
            console. log(operation (5, 2, function (firstNumber, secondNumber){
                return firstNumber + secondNumber 
            }))
        ////////////////


        console. log(operation (5, 2, (firstNumber, secondNumber) => firstNumber + secondNumber 
        ))

        ///////////////////////////////////
        const sum1= (firstNumber, secondNumber) => firstNumber + secondNumber 
        console.log(operation (5,2,sum));


        /////////////////////////

        const colors = ['red','blue','green'];
        colors.forEach(function(currentValue,index,array){
console.log(index,currentValue);

        })

        /////////////////////////


        const ages = [11,12,13,54]
        const hasAd= ages.some(function(element){
            return element >= 18
        })
        console.log(hasAd);
        ///////////////////////////////

        const areAd = ages.every(function(element){
            return element >= 18
        })
        console.log(areAd);

        ///////////////

        const isred = colors.includes('red')
        console.log(isred);

        //////////////////

        const index = colors.indexOf('red')
        console.log(index)
        /////////////////
        const index1 = colors.lastIndexOf('red')
        console.log(index1)


        /////////////


        
        const ages1 = [11,12,13,54]
        const hasAd1= ages.findIndex(function(element){
            return element >= 18
        })
        console.log(hasAd1);

        ///////
        const ages2 = [11,12,13,54]
        const hasAd2= ages.find(function(element){
            return element % 3 ===0
        })
        console.log(hasAd2);

        /////////////

        const add = c=ages.slice(0,2)
        console.log(add);
        ///////////////////
         const add1 = c=ages.splice(1,2)
        console.log(add1);


////////////////////////////////////////
const strcolors = colors.join()
console.log(strcolors)
////////////////

const strcolors1 = colors.reverse()
console.log(strcolors1)

/////////////////////////


const strColors = 'red ; green ; blue ; black'
const arrColors = strColors.split()
console. log (arrColors) 

//////////////////////////////////
const numbers = [2, 4, 1, 3, 5]
const total = numbers. reduce (function (accumulator, currentValue, index, array) {
return accumulator + currentValue
}, 100)
console. log (total);
