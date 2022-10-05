const submitBtn = document.querySelector("button");
const inputBox = document.querySelector("input");
const titleH1 = document.querySelector('h1');

const tempDisplay = document.querySelector("#temperature");
const feelDisplay = document.querySelector("#feel-like");
const conditionDisplay = document.querySelector("#condition");



submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    city = inputBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=5ef1a263481bd91065608522e6622744`;

    fetch(url)
        .then((res) => res.json()) // converting raw data from server into javascript object aka data {}
        .then((data) => {
            const temp = data["main"]["temp"] // we are declaring variable 'temp'. then assigning raw data categories 'main' and 'temp' to our variable temp
            const feelslike = data["main"]["feels_like"] // we are declaring variable 'feelslike'. then assigning raw data categories 'main' and 'feels_like' to our variable feelslike
            const condition = data["weather"][0]["main"] // we are declaring variable 'condition'. then assigning raw data categories 'weather' array [0]["main"] to our variable condition

            tempDisplay.innerHTML = "Temperature: " + Math.round(temp) + "°F"; // now we have raw data (temp), its time to display it on html. (adding Temperature: )
            feelDisplay.innerHTML = "Feels like: " + Math.round(feelslike) + "°F";
            conditionDisplay.innerHTML = "Condition: "  + condition;
            titleH1.innerHTML = "Weather for: " + data.name;

            
        })
        .catch((err) => console.log(err)) // you can ignore, boiler plate.

})

