// passwordCheck.js
function checkPassword(password) {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
        return "Strong";
    }
    return "Medium";
}

console.log(checkPassword("abc"));      // Weak
console.log(checkPassword("abc123"));   // Medium
console.log(checkPassword("Abc123"));   // Strong