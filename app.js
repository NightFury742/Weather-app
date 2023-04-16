let card = document.getElementById('card--container');
let city=  document.getElementById('city');
let sky = document.getElementById('sky');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let search = document.getElementById('submit');
let icon = document.getElementById('icon');

search.addEventListener('click', run_api);
document.getElementById('search').addEventListener("keypress", function (e) {
    if (e.key == 'Enter') {
        run_api();
    }
});



function run_api() {
    let cityname=document.getElementById('cityname').value;


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=ef9e1ab0d45dd6a2799fb5e9bf511cee`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            city.innerHTML = response.name;
            sky.innerHTML =`Sky condition: ${response.weather[0].main}`;
            temp.innerHTML =`Temperature: ${ Math.floor(Number(response.main.temp)-273)}°C`;
            wind.innerHTML = `Wind: ${response.wind.speed}Km/h`;

        })
        .catch(err => console.log(err));


}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






