// vowels.js
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("JavaScript"));

// capitalize.js
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world from js"));

// secondLargest.js
function secondLargest(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1];
}

console.log(secondLargest([10, 20, 5, 20, 8]));