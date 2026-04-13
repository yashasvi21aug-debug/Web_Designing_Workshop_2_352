function checkNumber() {

  let num = parseInt(document.getElementById("numberInput").value);

  // Validation
  if (isNaN(num)) {
    alert("Please enter a valid number!");
    return;
  }

  // Even or Odd
  let resultText;
  if (num % 2 === 0) {
    resultText = "Even Number";
  } else {
    resultText = "Odd Number";
  }

  document.getElementById("result").innerHTML = resultText;

  // Loop from 1 to num
  let output = "<h5>Numbers from 1 to " + num + ":</h5>";

  for (let i = 1; i <= num; i++) {
    output += i + " ";
  }

  document.getElementById("numbers").innerHTML = output;
}