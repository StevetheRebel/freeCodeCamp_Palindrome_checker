const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result')

let aPalindrome = 'is a palindrome.'
let notPalindrome = 'is not a palindrome,'

function errorAlert () {
    alert('Please input a value')
}


function palindromeChecker (str) {
    let reEx = /[^a-z0-9]/ig
    str = textInput.value;
    let cleanStr = str.toLowerCase().replace(reEx, "")

    let rev = cleanStr.split('').reverse().join('');

    if (str.length === 0) {
        return errorAlert()
    } else if (rev == cleanStr) {
        return result.innerText = `${textInput.value} ${aPalindrome}`;
    } else {
        return result.innerText = `${textInput.value} ${notPalindrome}`;
    }
}

checkBtn.addEventListener('click', palindromeChecker)