// palindrome.js
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// largest.js
function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLargest([3, 7, 2, 9, 5]));

// removeDuplicates.js
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));