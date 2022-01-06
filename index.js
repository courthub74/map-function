// Import stylesheets
import './style.css';

//map function
const words = ['One', 'Two', 'Three'];
const wordword = words.map((word) => word);
console.log(wordword);

const numbers = [1, 2, 3, 4, 5];
const numlist = numbers.map((number) => number);
console.log(numlist);

const digits = [11, 22, 33, 44, 55];
const doubles = digits.map((digit) => digit * 2);
console.log(doubles);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Map Function</h1> 
    with numbers ${numlist},
    <br><br>
    with words ${wordword}
    <br><br>
    with digits ${digits} doubled ${doubles}`;
