const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

// This function is for creating sizable arrays as we need them for our testing purposes.
function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// // Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// //! Extra Large
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();
// perf.start();
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();
// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

// //! large
// perf.start();
// doublerInsert(largeArray);
// let resultsInsert = perf.stop();
// perf.start();
// doublerAppend(largeArray);
// let resultsAppend = perf.stop();
// console.log('Results for the largeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

// //! Medium
// perf.start();
// doublerInsert(mediumArray);
// let resultsInsert = perf.stop();
// perf.start();
// doublerAppend(mediumArray);
// let resultsAppend = perf.stop();
// console.log('Results for the mediumArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

// //! Small
// perf.start();
// doublerInsert(smallArray);
// let resultsInsert = perf.stop();
// perf.start();
// doublerAppend(smallArray);
// let resultsAppend = perf.stop();
// console.log('Results for the smallArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

//! tiny
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();
perf.start();
doublerAppend(tinyArray);
let resultsAppend = perf.stop();
console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
