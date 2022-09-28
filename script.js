const textArea = document.querySelector("textarea");
const wordCount = document.querySelector(".wordCount");
const charCount = document.querySelector(".charCount");

textArea.addEventListener('input', (e) => {
    let charNow = e.target.value;

    let trim = charNow.trim();


    let charTotal = trim.split(" ").join('')
    let charLength = charTotal.length;
    charCount.textContent = charLength;

    let wordsArr = trim.split(" ");
    if(wordsArr[0] === "") wordsArr.splice(0, 1);
    console.log(wordsArr)
    let wordLength = wordsArr.length;
    wordCount.textContent = wordLength;
})