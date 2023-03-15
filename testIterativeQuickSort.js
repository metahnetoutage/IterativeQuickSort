import IterativeQuickSort from './iterativeQuickSort.js';

let items = [];

let maxRange = 100000; //1000000(4 min 31 seconds to run everything below) 100000 (less than 10 seconds to run everything below)

for(let i = 0; i < maxRange; i++){
    items.push(Math.random() * (maxRange + maxRange) - maxRange);
}

let startTime = new Date();
let result = new IterativeQuickSort(items, 0, items.length - 1);
result.IterativeQuickSort();
let endTime = new Date();
let time1 = endTime.getMilliseconds() - startTime.getMilliseconds() + 1;

let startTime2 = new Date();
items.sort((a, b)=> { a < b?-1: a === b?0:1 });
let endTime2 = new Date();
let time2 = endTime2.getMilliseconds() - startTime2.getMilliseconds() + 1;

let allSorted = true;


let test = result.getItems()[0];

let startSortCheck = new Date();
for(let c = 1; c < result.getItems().length; c++){
    if(test < result.getItems()[c]){
        test = result.getItems()[c];
    }
    else if(test > result.getItems()[c]){
        allSorted = false;
        break;
    }
}
let endSortCheck = new Date();
let timeSortCheck = endSortCheck.getMilliseconds() - startSortCheck.getMilliseconds() + 1;

console.log(`The array is sorted: ${ allSorted }\n\tTime to run sort check:${ timeSortCheck }ms\n\titerativeQuickSort time:${ time1 }ms\n\trecursiveQuickSort:${ time2 }ms`);

/**
 * This is not the fastest implementation of IterativeQuickSort, as shown below.
 * I will Create a New IterativeQuickSort which demoes far faster result.
 * The array is sorted: true
        Time to run sort check:2ms
        iterativeQuickSort time:735ms
        recursiveQuickSort:3ms
 */

/**
 * This faster implementation of IterativeQuickSort, as shown below.
 * I will Create a New IterativeQuickSort which demoes far faster result.
 *  The array is sorted: true
	Time to run sort check:3ms
    iterativeQuickSort time:494ms
    recursiveQuickSort:4ms
 */