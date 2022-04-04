// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give two Solutions to this problem, using different types of data structures each time.

// Problem 1, Solution 1 with an array.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set. 


const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];


const sumDistinctHandler = (setA, setB) => {
    const firstDistinct = setA.filter (item => {
        return !setB.includes(item);
    })
    const secondDistinct = setB.filter (item => {
        return !setA.includes(item);
    })

    const distinctSum = firstDistinct.concat(secondDistinct);
    let sum = 0;
    for(let i=0; i<distinctSum.length; i++){
        sum += distinctSum[i];
    } 
    return sum;
};

console.log(sumDistinctHandler(set1, set2));


// Problem 1, Solution 2 with an hash table.
// Insert all the elements from both the sets with the element as key and its count (in both arrays).
// Now iterate through the constructed map and sum all the elements with count = 1.

let arr = set1.concat(set2);
let n = arr.length;


const hashSumHandler = (arr, n) =>{
    let sum = 0;
  
    // Hash to store all element of array
    let s = new Set();
    for (let i = 0; i < n; i++)
    {
        if (!s.has(arr[i]))
        {
            sum += arr[i];
            s.add(arr[i]);
        }
    }
    return sum / 2;
    };
     
console.log(hashSumHandler(arr, n));



// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
// Example: 

// Set 1: [12, 13, 6, 10]
// Set 2: [13, 10, 16, 15]
// Sum of overlapping elements: 46
// Explanation: Common elements are 10, 13
// Instructions

const set3 = [12, 13, 6, 10];
const set4 = [13, 10, 16, 15];

const overlapSum = (setC, setD) => {
    const myCommonSet = setC.filter( set => {
        for(i=0; i<setD.length; i++){
            if (set == setD[i]){
                return true;
            }
        }
    });

    let addSet = 0;
    for(i=0; i<myCommonSet.length; i++){
        addSet += myCommonSet[i];
    }
    return addSet * 2;
}

console.log(overlapSum(set3, set4));

