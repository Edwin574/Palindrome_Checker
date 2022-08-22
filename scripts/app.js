const input = document.getElementById("palindrome-text");
const button = document.getElementById("check-button");
const feedback = document.getElementById("feedback");
 


const checkPalindrome = () => {
    input.addEventListener('input', function () {
        let inputValue =(input.value).toString()
        if (inputValue === inputValue.reverse()) {
             feedback.innerHTML=(`${inputValue} is a Palindrome`)
        } else {
            feedback.innerHTML=(`${inputValue} is not Palindrome`)
         }
     })
     
}
button.addEventListener('click', function () {
    checkPalindrome()
})