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
    feedback.innerHTML = "This is a palindrome";
    console.log("palindrome");
  } else if (inputValue !== reverseString && inputValue !== "") {
    feedback.innerHTML = "This is not a palindrome";
    console.log("not palindrome");
  }
});

// const checkPalindrome = () => {
//     input.addEventListener('input', function () {
//         let inputValue =(input.value).toString()
//         if (inputValue === inputValue.reverse()) {
//              feedback.innerHTML=(`${inputValue} is a Palindrome`)
//         } else {
//             feedback.innerHTML=(`${inputValue} is not Palindrome`)
//          }
//      })

// }
// button.addEventListener('click', function () {
//     checkPalindrome()
// })
