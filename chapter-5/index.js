//Selection sort is a simple comparison-based sorting algorithm. It divides the input array into two parts: a sorted subarray and an unsorted subarray. Initially, the sorted subarray is empty, and the unsorted subarray contains all elements of the input array.
//-The algorithm iterates through the unsorted subarray to find the minimum element.
//-It compares each element with the current minimum element found so far.
//-If a smaller element is found, it updates the minimum element.

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowestNumIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestNumIdx]) {
                lowestNumIdx = j
            }
        }
        if(lowestNumIdx !== i) {
            let temp = array[i];
            array[i] = array[lowestNumIdx];
            array[lowestNumIdx] = temp;
        }
    }
    return array
}
console.log(selectionSort([3,8,7,2,9,4,5,1]))


//function, that prints only even numbers that less than given number;
function printEvens1(upperLimit) {
    let number = 2;
    while (number <= upperLimit) {
        if(number % 2 === 0) {
            console.log(number)
        }
        number +=1
    }
} 
printEvens1(15)
//----------------------
function printEvens2(upperLimit) {
    let number = 2;
    while (number <= upperLimit) {
        console.log(number)
        number +=2
    }
    
}
printEvens2(9)