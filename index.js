//Defining a function
//Remember that `` is required for interpolation

function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

//Hoisting <- Calling functions before they appear
// function must be defined using the [function] declaration

function mondayWork (activity ='go to the office') {
    return `This Monday, I will ${activity}.`
}

//IIFE Immediately Invoked Function Expression
//Scope Chain
//Closure

function wrapAdjective (sym = '*') {
    return (str = 'special') => {return `You are ${sym}${str}${sym}!`}
}

function add (x, y) {return x + y}
function subtract (x, y) {return x - y}
function multiply (x, y) {return x * y}
function divide (x, y) {return x / y}
let Calculator = {add, subtract, multiply, divide}

function actionApplyer (int, arr) {
    if (arr.length === 0) {
        return int
    } else {
        return ((int * 2) + 1000) %7
    }
}