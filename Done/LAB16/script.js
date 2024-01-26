// Task 1

// 1. Check if input 
function is_array(input) {
    return Array.isArray(input);
}

// 2. Clone an array
function array_Clone(arr) {
    return arr.slice(0);
}

// 3. Get the first n elements of an array
function первый(arr, n) {
    return n ? arr.slice(0, n) : arr[0];
}

// 4. Get the last n elements of an array
function последний(arr, n) {
    return n ? arr.slice(-n) : arr[arr.length - 1];
}

// 5. Join array elements into a string
var myColor = ["Red", "Green", "White", "Black"];
var resultString1 = myColor.join(", ");
var resultString2 = myColor.join(". ");
var resultString3 = myColor.join(" + ");

// 6. Sort array elements
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
    return a - b;
});

// 7. Find the most frequent element in an array
var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var frequencyMap = {};
var mostFrequentElement;
var maxFrequency = 0;

arr2.forEach(function(element) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
    }
});

// 8. Calculate sum and product of an array of integers
var arr3 = [1, 2, 3, 4, 5];
var sum = arr3.reduce(function(a, b) { return a + b; }, 0);
var product = arr3.reduce(function(a, b) { return a * b; }, 1);

// 9. Remove duplicate elements from an array (case-insensitive)
var arr4 = ['apple', 'Orange', 'orange', 'banana', 'APPLE'];
var uniqueArr = Array.from(new Set(arr4.map(item => item.toLowerCase())));

// 10. Binary search in a sorted array
function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === target) return mid;
        if (sortedArray[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return -1; // Element not found
}

// Display results in the console
console.log(is_array('resource'));
console.log(is_array([1, 2, 4, 0]));

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log(первый([7, 9, 0, -2]));
console.log(первый([], 3));
console.log(первый([7, 9, 0, -2], 3));
console.log(первый([7, 9, 0, -2], 6));
console.log(первый([7, 9, 0, -2], -3));

console.log(последний([7, 9, 0, -2]));
console.log(последний([7, 9, 0, -2], 3));
console.log(последний([7, 9, 0, -2], 6));

console.log(resultString1);
console.log(resultString2);
console.log(resultString3);

console.log(arr1);

console.log("Most frequent element:", mostFrequentElement, "(", maxFrequency, "times)");

console.log("Sum:", sum);
console.log("Product:", product);

console.log("Unique array:", uniqueArr);

console.log("Binary Search Result:", binarySearch(arr1, 3));
