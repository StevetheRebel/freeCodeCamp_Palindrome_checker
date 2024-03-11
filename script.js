const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result')

let aPalindrome = 'is a palindrome.'
let notPalindrome = 'is not a palindrome,'

function palindromeChecker (str) {
    let reEx = /[^a-z0-9]/ig
    str = textInput.value.toLowerCase();
    let cleanStr = str.replace(reEx, "")

    let rev = cleanStr.split('').reverse().join('');

    if (rev == cleanStr) {
        return result.innerText = `${textInput.value} ${aPalindrome}`
    } else {
        return result.innerText = `${textInput.value} ${notPalindrome}`
    }
}

checkBtn.addEventListener('click', palindromeChecker)