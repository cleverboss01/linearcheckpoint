// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give two Solutions to this problem, using different types of data structures each time.

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// const commonSetA = set1.filter(set => {
//     for(i=0; i<set2.length; i++){
//         if (set == set2[i]){
//             return true;
//         }
//     }
// });

// console.log(commonSetA);

const sumDistinctHandler = (setA, setB) => {
    for(i=0; i<setA.length; i++){
        for (j=0; j<setB.length; j++){
            var distinct = [];
            return [setA[i], setB[j]];
        }
    }
};

console.log(sumDistinctHandler(set1, set2));

// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
// Example: 

// Set 1: [12, 13, 6, 10]
// Set 2: [13, 10, 16, 15]
// Sum of overlapping elements: 46
// Explanation: Common elements are 10, 13
// Instructions
// Problem 1, Solution 1 with an array.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set. 

const set3 = [12, 13, 6, 10];
const set4 = [13, 10, 16, 15];

const commonSetB = set3.filter(set => {
    for(i=0; i<set4.length; i++){
        if (set == set4[i]){
            return true;
        }
    }
});

console.log(commonSetB);

const overlapSum = common => {
    let sum = 0;
    for(i=0; i<common.length; i++){
        sum += common[i];
    }
    return sum * 2;
}

console.log(overlapSum(commonSetB));


// Problem 1, Solution 2 with an hash table.
// Insert all the elements from both the sets with the element as key and its count (in both arrays).
// Now iterate through the constructed map and sum all the elements with count = 1.
// Problem 2, same approaches with little modifications.

