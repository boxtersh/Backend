const btn = document.querySelector('.btn-dark');
btn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Volgograd&appid=46c7c2167acec7df7f595a6906d77796')
//        if (!response.ok) {console.log('Ошибка получения данных');}
//        else {
            .then(response => response.json())
            .then(data => {console.log('Данные:', data);})
//        }
        .catch(error => {console.log(error);})
});
