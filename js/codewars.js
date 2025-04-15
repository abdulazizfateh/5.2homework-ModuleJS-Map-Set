// CODEWARS PROBLEMS - 8KYU

// P1
const getAge = (inputString) => {
    return Number(inputString[0]);
}
console.log(getAge('9 years old'));




// P2
const feast = (beast, dish) => {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
console.log(feast("great blue heron", "garlic naan"));




// P3
const checkForFactor = (base, factor) => {
    return base % factor === 0;
}




// P4
const arrayPlusArray = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2);
    return mergedArr.reduce((sum, item) => {
        return sum + item
    }, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));




// P5
const hoopCount = (n) => {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}
console.log(hoopCount(3));




// P6
const getAverage = marks => Math.floor(marks.reduce((sum, item) => sum + item) / marks.length);
console.log(getAverage([2, 2.9, 2.5, 2.5]));




// P7
const reverseWords = str => str.split(" ").reverse().join(" ");
console.log((reverseWords("Abdulaziz Ergashev Qaxramon O'gli")));




// P8
const cockroachSpeed = s => {
    return Math.floor(s * 100000 / 3600);
}
console.log(cockroachSpeed(1.09));




// P9
function switchItUp(number) {
    switch (number) {
        case 0:
            return "Zero"
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
    }
}
console.log(switchItUp(9));




// P10.1 - Using Regular For Loop
const removeEveryOther = arr => {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// P10.2 - Using filter() method
{
    const removeEveryOther = arr => {
        return arr.filter((item, index) => {
            return index % 2 === 0;
        })
    }
    // console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
}




// P11
const twiceAsOld = (d, s) => {
    return Math.abs(d - 2 * s);
}
console.log(twiceAsOld(55, 30));




// P12.1 - Using Regular For Loop
function strCount(str, letter) {
    let count = 0;
    for (let item of str) {
        if (item === letter) {
            ++count;
        }
    }
    return count;
}

console.log(strCount("abdulaziz", "a"));

// P12.2 - Using split(), filter() methods
{
    function strCount(str, letter) {
        return str.split("").filter(item => item === letter).length;
    }
    // console.log(strCount("abdulaziz", "a"));
}




// P13
function testEven(n) {
    return n % 2 === 0;
}
console.log(testEven(12));




// P14
const move = (position, roll) => {
    return position + roll * 2
}
console.log(move(0, 4));




// P15
function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }
    return name;
}
console.log(getPlanetName(1));




// P16
const enough = (cap, on, wait) => {
    return cap - on >= wait ? 0 : wait - (cap - on);
}




// P17
const between = (a, b) => {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(between(1, 4));




// P18 - Adding a new method(), called isUpperCase(), for "String" data type
{
    String.prototype.isUpperCase = function () {
        return this.toString() === this.toUpperCase();
    }
    console.log("ABDULAZIZ".isUpperCase());
}




// P19
const monkeyCount = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }
    return arr;
}
console.log(monkeyCount(10));




// P20
const powersOfTwo = n => {
    let twoToThePowerOfN = [];
    for (let i = 0; i <= n; i++) {
        twoToThePowerOfN.push(2 ** i);
    }
    return twoToThePowerOfN;
}
console.log(powersOfTwo(10));