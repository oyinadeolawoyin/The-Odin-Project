//for loop

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

// console.log(pow(2, 3));

function Power(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// console.log(Power(2, 3));

let company = {
    sale: [{
        name: "John",
        salary: 1000
    },
    {
        name: "Alice",
        salary: 1600
    }],

    development: {
        sites: [{
            name: "Peter",
            salary: 2000
        },
        {
            name: "Alex",
            salary: 1800
        }],

        internals: [{
            name: "Jack",
            salary: 1300
        }]
    }
};

// let result = 0;
// for (let y of Object.keys(company)) {
//     console.log(Object.keys(company));
//     // console.log(y);
//     for (let i of Object.keys(company[y])) {
//         if (i == 0 || i == 1) {
//             console.log(result, "+", company[y][i].salary );
//             result += company[y][i].salary;
            
//         } else {
//            for (let j of Object.keys(company[y])) {
//             console.log(j);
//             for (let k of company[y][j]) {
//                 console.log(result, "+", k.salary)
//                 result += k.salary;
//             }
//            }
//         }
     
//     console.log(result);   
// }
// }

function sumSalarise(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            console.log(subdep);
            sum += sumSalarise(subdep);
        }

        return sum;
    }
        
}

// console.log(sumSalarise(company));

function coltaz(n, step = 0) {
    if (n == 1) return step;
    let num = ""; 
    if ( n % 2 !== 0) 
        num = 3 * n + 1;
    else num = n;
    
    step +=1;
    return coltaz(num / 2, step);
}

// console.log(coltaz(7));

function sumRange(n) {
    if (n == 1) return 1;
    return n + sumRange(n - 1);
}

// console.log(sumRange(3));

function pow (x, n) {
    if (n === 0) return 1;
    return x * pow (x, n - 1);
}

// console.log(pow(2, 4))

function fact (n) {
    if (n === 1) return 1;
    return n * fact(n - 1);
}

// console.log(fact(5))

function all (arr, func) {
    
    if (arr.length === 1 && func(arr[0]) === true) return true;
    
    if (func(arr[0]) === true && arr.length !== 0) {
        arr.splice(0, 1);
        return all(arr, func)
    } else return false
}

// console.log(all([1,2,3,5, 10], function(num) {
//     return num < 7;
// }));

function productOfArray(arr) {
    if (arr.length === 1) return arr[0];

    return arr.splice(0, 1) * productOfArray(arr);
}

// console.log(productOfArray([1,2,3,10]));

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo2"
                    }
                }
            }
        }
    }
}

function contains(obj, item) {
    if (Object.values(obj).length === 0) return false;
    else if (item in obj || Object.values(obj).includes(item)) return true;
    else {
        for (let value of Object.values(obj)) {
            if (contains(value, item)) return true;
        }

        return false;
    }
}

// console.log(contains(nestedObject, "foo2"));

function totalIntegers(arr) {
    let count = 0;
    if (arr.length === 0) return count;

    for (let val of arr) {
        if (Number.isInteger(val)) count +=1;
        else if (typeof val !== "number" && !Array.isArray(val)) continue;
        else count +=totalIntegers(val);
    }

    return count;
}

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

function SumSquares(arr) {
    // console.log(arr);
    if (arr.length === 0) return 0;

    let count = 0; 
    for (let val of arr) {
        if (Number.isInteger(val)) count +=val*val; 
        else count +=SumSquares(val);
    }
    return count;
}

// console.log(SumSquares([[1, 2], 3]))
// console.log(SumSquares([[[[[[[[[1]]]]]]]]]));
// console.log(SumSquares([10, [[10], 10], 10]))

function replicate(n, x) {
    if (n === 1) return [x] 
    else if (n < 0) return [] 
    else {
        let list = [];
        list.push(x) 
        return [x, ...replicate(n-1, x)];
    }
   
}

function rep(times, number) {
    if (times <= 0) return [];

    return [number].concat(rep(times - 1, number));
}

console.log(rep(10, 5));
console.log(rep(1, 69));
console.log(rep(-2, 6));
