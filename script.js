const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const themeToggleBtn = document.getElementById('theme-toggle');

let currentInput = '';

document.body.classList.add('light-theme');

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerText = '🌙 Karanlık Tema';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleBtn.innerText = '☀️ Açık Tema';
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            currentInput = '';
            display.innerText = '0';
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || '0';
        } else if (value === '=') {
            try {
                let expression = currentInput.replace(/x/g, '*');
                display.innerText = eval(expression);
                currentInput = display.innerText;
            } catch {
                display.innerText = 'Hata';
                currentInput = '';
            }
        } else {
            if (display.innerText === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.innerText = currentInput;
        }
    });
});