const name = document.getElementById('name');
const timezone = document.getElementById('timezone');
const data_dt = document.getElementById('data_dt');
const data_temp = document.getElementById('data_temp');
const data_feels_like = document.getElementById('data_feels_like');
const data_pressure = document.getElementById('data_pressure');
const data_humidity = document.getElementById('data_humidity');
const data_clouds = document.getElementById('data_clouds');
const data_wind_speed = document.getElementById('data_wind_speed');
const weatherPointList = document.querySelector('.form-select');
const img = document.getElementById('img');
const btn = document.querySelector('.btn.btn-info');
console.log(btn);
btn.addEventListener('click', () => {
    weatherPoint = weatherPointList.value;
    if (!(weatherPoint == 'Выберете место для определения погоды')) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&${weatherPoint}&appid=46c7c2167acec7df7f595a6906d77796`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка протокола ресурса, попробуйте позже HTTP error');
                }
                return response.json();
            })
            .then(data => {
                let imgPath = `/img/${weatherPoint}.jpg`;
                img.setAttribute('src', imgPath);
                console.log(data);
                name.textContent = `Местность: ${data.name}`;
                timezone.textContent = `Часовой пояс: ${data.timezone / 3600}`;
                let localtime = new Date((data.dt + data.timezone) * 1000);
                data_dt.textContent = `Местное время: ${localtime}`;
                data_temp.textContent = `Температура: ${data.main.temp}`;
                data_feels_like.textContent = `Ощущается как: ${data.main.feels_like}`;
                data_pressure.textContent = `Атмосферное давление, мм рт. ст.: ${data.main.pressure * 0,750}`;
                data_humidity.textContent = `Влажность, %: ${data.main.humidity}`;
                data_clouds.textContent = `Облачность, %: ${data.clouds.all}`;
                data_wind_speed.textContent = `Скорость ветра, метр/сек: ${data.wind.speed}`;
            })
            .catch(error => {console.log('Ошибка данных сервера:', error);})
    }
    else alert('Вы ничего не выбрали');
});
