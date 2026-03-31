const btn = document.querySelector('.btn-dark');
btn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Volgograd&appid=46c7c2167acec7df7f595a6906d77796')
        .then(response => {
            if (!response.ok) {
                console.log('Ошибка данных пользователя');
            }
            else {
                return response.json();
                .then(data => {console.log('Данные:', data);})
            }
        }
        .catch(error => {console.log('Ошибка данных сервера:', error);})
});
