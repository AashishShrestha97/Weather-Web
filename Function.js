async function fetcher() {
    try {
        const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Belfast&units=metric&APPID=7ec3a74dc43469b1b8ded51f11ef82d4");
        const data = await response.json();
        console.log(data);

        var city = document.getElementById("city");
        city.innerHTML = data.name;
        var condition = document.getElementById("condition");
        condition.innerHTML = data.weather[0].main;
        var temperature = document.getElementById("celcius");
        temperature.innerHTML = data.main.temp + '℃';
        var humidity = document.getElementById("Humidity");
        humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
        var wind_speed = document.getElementById("wind");
        wind_speed.innerHTML = 'Wind speed: ' + data.wind.speed + " m/s";
        var pressure = document.getElementById("pressure");
        pressure.innerHTML = 'Pressure: ' + data.main.pressure +"mm of hg";
        var direction = document.getElementById("Wind_Direction")
        direction.innerHTML = 'Wind Direction: ' + data.wind.deg + '°';
        var icon = document.getElementById("icon");
        var iconcode = data.weather[0].icon;
        console.log(iconcode)
        icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconcode}@2x.png" alt="">`
        var today = new Date();
        var month = today.getMonth();
        var date = today.getDate();
        var year = today.getFullYear();
        monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthName = monthList[month];
        document.getElementById("displayDate").innerHTML = monthName + ' ' + date + ', ' + year;
    } catch (err) {
        console.log("error received", err);
    }
}
fetcher();

const myform = document.querySelector(".example");
myform.addEventListener("submit", async function (e) {
    e.preventDefault();
    var search = document.querySelector(".search_input").value;
    console.log(search);
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7ec3a74dc43469b1b8ded51f11ef82d4`);
    var data = await response.json();

    console.log(data);

    var location = document.getElementById("city");	
    location.innerHTML = data.name;
    var condition = document.getElementById("condition");
    condition.innerHTML = data.weather[0].main;
    var temperature = document.getElementById("celcius");
    temperature.innerHTML = data.main.temp + '℃';
    var humidity = document.getElementById("Humidity");
    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
    var wind_speed = document.getElementById("wind");
    wind_speed.innerHTML = 'Wind Speed: ' + data.wind.speed + ' m/s';
    var pressure = document.getElementById("pressure");
    pressure.innerHTML = 'Pressure: ' + data.main.pressure + ' mm of Hg';
    var icon = document.getElementById("icon");
    var iconcode = data.weather[0].icon;
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconcode}@2x.png" alt="">`;
});





