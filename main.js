const myString = 'I Love JavaScript'
const regex = /Kotlin/
const containsRegex = regex. test (myString)

//////////////////////////////


const myString1 = 'I Love JavaScript'
const myRegex = /JavaScript/
let newString = myString.replace (myRegex,
'Kotlin')
console.log(newString)
//////////


const myString2 = 'I Love JavaScript'
let newRegex = myString. search(/JavaScript/)
console. log (newRegex)

////////////////////////


const str = 'RegExr was created by gskinner.com,and is proudly hosted by Media Temple. Edit the Expression and Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.';
let myRegex2 = str.match (/and/g)
console. log (myRegex. Length)

//////////////////////////


console. log (1)
console. log (2)
setTimeout (() => {
console. log (3)
}, 3000)
console. log (4)
console. log (5)

///////////////////////




console. log( 'Start ' )
function userInfo(name){
setTimeout( () => {
console.log('** User info received **')
return name
},3000)
}
let userName = userInfo('Khalid')
console.log (userName)
console.Log (' End')


///////////////////////////////////////
let ages = [25, 30, 32]
let [firstAge, secondAge, thirdAge] = ages
console. log(firstAge, secondAge, thirdAge)


///////////////////

let first = 5, second = 7;
[first, second] = [first,
first]
console. log(first, second )

let colors = ['red', 'green']
let [firstColor, secondColor,
thirdColor] = colors
console. log(firstColor, secondColor, thirdColor)


//////////////////////////////////////////



let color4 = ['red', 'green'];
[colors [0], colors [1]] = ['blue','white','black']
console. log (colors)


///////////////////////





let student = {
    name: 'Ali',
    age : 25
}
    let {age: yourAge, name: yourName} = student
    console. log (yourName, yourAge)




    ///////////////////////////////////


    let first1 = [1, 2, 3]
        let second1 = [4, 5]
        let third = [...first1,... second1]
        console. log (third)


    /////////////////

    function sum(first, second, ...others){
        console. log (...others)
        return first + second
    }
        6
        console. log(sum(1, 2, 6, 80, 75))


        /////////////////////////




        