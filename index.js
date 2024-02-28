
// function calculateMoney(ticketSale) {

//     if (ticketSale < 0) {
//         return "Please enter a positive number";
//     }

//     else {
//         let totalIncome = (ticketSale * 120) - (500 + (8 * 50))
//         return totalIncome
//     }
// }

// function checkName(name) {

//     if (typeof name !== "string") {
//         return "invalid";
//     }
//     const goodLast = 'a, y, i , e , o , u, w';
//     const nameLastChar = name.charAt(name.length - 1).toLowerCase();

//     for (let item of goodLast) {
//         if (item === nameLastChar) {
//             return "good name";
//         }
//     }
//     return "bad name";

// }

// console.log(checkName("RashE"));

// function deleteInvalids(array) {

//     let numArr = [];

//     if (Array.isArray(array) === false) {
//         return "This is not an array";
//     }
//     else {
//         for (let item of array) {
//             if (typeof item !== 'number' || isNaN(item)) {
//                 continue
//             }
//             else {
//                 numArr.push(item)
//             }
//         }
//         return numArr;
//     }

// }

// function password(obj) {
//     if (obj.hasOwnProperty('name') === false || obj.hasOwnProperty('birthYear') === false || obj.hasOwnProperty('siteName') === false) {
//         return 'invalid'
//     }

//     const userName = obj.name;
//     const userSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//     const userBirthYear = obj.birthYear

//     if (userBirthYear.toString().length < 4) {
//         return 'invalid'
//     }
//     else {
//         const userPassword = userSiteName + '#' + userName + '@' + userBirthYear;
//         return userPassword;
//     }

// }

// function monthlySavings(arr, livingCost) {
//     if (Array.isArray(arr) === false || typeof livingCost !== "number"
//     ) {
//         return 'invalid input'
//     }
//     else {
//         let tax = 0;
//         let sahedSavings = 0;
//         for (let item of arr) {
//             if (item >= 3000) {
//                 tax = item * 20 / 100
//             }
//             sahedSavings += item
//         }
//         const savingsAfterTax = sahedSavings - tax - livingCost;
//         if (savingsAfterTax < 0) {
//             return 'earn more';
//         }
//         if (savingsAfterTax >= 0) {
//             return savingsAfterTax;
//         }
//     }
// }






function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please enter a positive number";
    }
    else {
        let totalIncome = (ticketSale * 120) - (500 + (8 * 50))
        return totalIncome
    }
}
function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const goodLast = 'a, y, i , e , o , u, w';
    const nameLastChar = name.charAt(name.length - 1).toLowerCase();
    for (let item of goodLast) {
        if (item === nameLastChar) {
            return "good name";
        }
    }
    return "bad name";
}

console.log(checkName('mizan'));
function deleteInvalids(array) {
    let numArr = [];
    if (Array.isArray(array) === false) {
        return "This is not an array";
    }
    else {
        for (let item of array) {
            if (typeof item !== 'number' || isNaN(item)) {
                continue
            }
            else {
                numArr.push(item)
            }
        }
        return numArr;
    }
}
function password(obj) {
    if (obj.hasOwnProperty('name') === false || obj.hasOwnProperty('birthYear') === false || obj.hasOwnProperty('siteName') === false) {
        return 'invalid'
    }
    const userName = obj.name;
    const userSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const userBirthYear = obj.birthYear
    if (userBirthYear.toString().length < 4) {
        return 'invalid'
    }
    else {
        const userPassword = userSiteName + '#' + userName + '@' + userBirthYear;
        return userPassword;
    }
}
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === false || typeof livingCost !== "number"
    ) {
        return 'invalid input'
    }
    else {
        let tax = 0;
        let sahedSavings = 0;
        for (let item of arr) {
            if (item >= 3000) {
                tax = item * 20 / 100
            }
            sahedSavings += item
        }
        const savingsAfterTax = sahedSavings - tax - livingCost;
        if (savingsAfterTax < 0) {
            return 'earn more';
        }
        if (savingsAfterTax >= 0) {
            return savingsAfterTax;
        }
    }
}