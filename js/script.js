ask = document.querySelector('#ask');
question = document.querySelector('#question');

ask.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#answer').innerHTML = yesOrNo();
});

let yesOrNo = () => {
    let num = Math.round(Math.random() * 5);
    
    if(num == 0) {
        return 'Да.';
    }
    if(num == 1) {
        return 'Нет.';
    }
    if(num == 2) {
        return 'Возможно.';
    }
    if(num == 3) {
        return 'Я не знаю.';
    }
    else {
        return 'Скорее нет.';
    }
}

console.log(yesOrNo())