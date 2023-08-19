const input = document.querySelector('input');
const list = document.querySelectorAll('li');

input.addEventListener('input', () => {
    const inputVal = input.value.toLocaleLowerCase();

    for (let i = 0; i < list.length; i++) {
        const city = list[i].innerText.toLocaleLowerCase();

        if (city.indexOf(inputVal) == -1) {
            list[i].classList.add('hide');
        } else {
            list[i].classList.remove('hide');
        }
    }
});