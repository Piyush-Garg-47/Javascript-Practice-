const typedTextspan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['life', 'awesome', 'handsome', 'beautiful', 'chill'];

const typingDelay = 200;    // Reduced delay for typing
const eraseDelay = 200;     // Reduced delay for erasing
const newLetterDelay = 2000; // Delay between words

let index = 0;
let chrIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (chrIndex < words[index].length) {
        typedTextspan.textContent += words[index].charAt(chrIndex);
        chrIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (chrIndex > 0) {
        typedTextspan.textContent = words[index].substring(0, chrIndex - 1);
        chrIndex--;
        setTimeout(erase, eraseDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay);
    }
}
