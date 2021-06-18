const buttn1 = document.getElementById('btn-1');
const buttn2 = document.getElementById('btn-2');
const buttn3 = document.getElementById('btn-3');
const buttn4 = document.getElementById('btn-4');
const buttn5 = document.getElementById('btn-5');
const buttn6 = document.getElementById('btn-6');
const caja = document.getElementById('caja');

buttn1.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#e53e3e';
});

buttn2.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#dd6b20';
});

buttn3.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#faf089';
});

buttn4.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#48bb78';
});

buttn5.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#81e6d9';
});

buttn6.addEventListener('click', (e) => {
    caja.style.backgroundColor = '#d53f8c';
});