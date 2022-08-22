const myInput = document.getElementById("palindrome-text");
const button = document.getElementById("check-button");
const feedback = document.getElementById("feedback");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = myInput.value.toLowerCase();
    let reverseString = inputValue.split("").reverse().join("");

    if (inputValue == "") {
        alert("Enter a a word in the input");
    }
    if (inputValue == reverseString && inputValue !== "") {
        feedback.textContent = `${myInput.value} is a palindrome`
        feedback.classList.add('success')
        feedback.classList.remove('fail')

        console.log("palindrome");
    } else if (inputValue !== reverseString && inputValue !== "") {
        feedback.textContent = `${myInput.value} is not a palindrome`;
        feedback.classList.add('fail')
        feedback.classList.remove('success')
      
        console.log("not palindrome");
    }
});
