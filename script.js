// Will get input from user
const textArea = document.querySelector("textarea");

// Count update
const wordCount = document.querySelector(".wordCount");
const charCount = document.querySelector(".charCount");

textArea.addEventListener('input', (e) => {
    // will get the value on each input
    let charNow = e.target.value;

    // will trim whitespaces from start and end
    let trim = charNow.trim();

    // This will remove whitespaces between chars, join them, calculate length and update on the page
    let charTotal = trim.split(" ").join('')
    let charLength = charTotal.length;
    charCount.textContent = charLength;

    // This will remove whitespaces between chars
    let wordsArr = trim.split(" ");

    // If first word is blank remove it
    if(wordsArr[0] === "") wordsArr.splice(0, 1);

    // Calculate the length and update on the page.
    let wordLength = wordsArr.length;
    wordCount.textContent = wordLength;
})