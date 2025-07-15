const display = document.getElementById('display');
const clickSound = document.getElementById('clickSound');

async function playSound() {
    try {
        await clickSound.play();
    } catch (error) {
        console.log("Error playing sound:", error);
    }
}

async function append(value) {
    await playSound();
    if (display.textContent === '0') display.textContent = '';
    display.textContent += value;
}

async function clearDisplay() {
    await playSound();
    display.textContent = '0';
}

async function deleteLast() {
    await playSound();
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        await clearDisplay();
    }
}

async function calculate() {
    await playSound();
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown', async (e) => {
    const key = e.key;
    if ((/\d|[+\-*/%.]/).test(key)) {
        await append(key);
    } else if (key === 'Enter') {
        await calculate();
    } else if (key === 'Backspace') {
        await deleteLast();
    } else if (key.toLowerCase() === 'c') {
        await clearDisplay();
    }
});