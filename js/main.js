



var x = new Date();
var day = x.toLocaleDateString('en',{dateStyle:'long'})
console.log(day);
// var day = x.toLocaleDateString('en',{dateStyle:'long'})
var weekday = x.toLocaleDateString('en',{weekday:'long'})


let tomorrow = new Date();
tomorrow .setDate(tomorrow.getDate() +1)
y = tomorrow.toLocaleDateString('en',{weekday:"long"})
console.log(y)

let afterTomorrow = new Date();
afterTomorrow .setDate(afterTomorrow.getDate() +2)
z = afterTomorrow.toLocaleDateString('en',{weekday:"long"})
console.log(z)




var cards = document.getElementById('cards')
var loca = document.getElementById('location')
var findButton = document.getElementById('find')
var cityInput = document.getElementById('cityInput')
var contact = document.getElementById('contact')
var home = document.getElementById('home')
var head = document.getElementById('head')
document.getElementById('day').innerHTML= weekday
document.getElementById('nDay').innerHTML= day
document.getElementById('date2').innerHTML=y
document.getElementById('date3').innerHTML=z

var cityName;
var city = document.getElementById('cityInput')
var avghumidity;
var wind;
var weather = []
city.addEventListener('input', function () {
    forecast(city.value)
})
async function forecast(city) {
    try{
        
        var response = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=0b9b8885a2c4441b812111500241806&days=3&q=${city}`)
        var finalData = await response.json()
        weather = finalData.forecast.forecastday
        cityName = finalData.location.name;
        wind = 
        console.log(cityName)
        console.log(finalData)
        console.log(weather)
        display1()
        display2()
        display3()
    }


    catch(error){
        console.log(error)
    }
}



function display1() {
    document.getElementById('cityName').innerHTML=cityName
    document.getElementById('avghumidity').innerHTML= weather[0].day.avghumidity
    document.getElementById('wind').innerHTML=weather[0].day.maxwind_kph
    document.getElementById('tempDay').innerHTML= weather[0].day.maxtemp_c
    document.getElementById('tempDay').innerHTML= weather[0].day.maxtemp_c
    document.getElementById('day1-image').setAttribute('src',`https:${weather[0].day.condition.icon}`)
    document.getElementById('sunny').innerHTML =weather[0].day.condition.text


}

function display2() {
    document.getElementById('minTemp2').innerHTML= weather[1].day.mintemp_c
    document.getElementById('maxTemp2').innerHTML= weather[1].day.maxtemp_c
    document.getElementById('sunny2').innerHTML =weather[1].day.condition.text
    document.getElementById('day2-image').setAttribute('src',`https:${weather[1].day.condition.icon}`)

}

function display3() {
    document.getElementById('minTemp3').innerHTML= weather[2].day.mintemp_c
    document.getElementById('maxTemp3').innerHTML= weather[2].day.maxtemp_c
    document.getElementById('sunny3').innerHTML =weather[2].day.condition.text
    document.getElementById('day3-image').setAttribute('src',`https:${weather[2].day.condition.icon}`)

}

contact.addEventListener('click',function () {
    home.setAttribute('style','background-image: none;')
    cityInput.setAttribute('style','background-color: #262936;')
    cityInput.value = ""
    cityInput.removeAttribute('placeholder')
    findButton.classList.add('d-none')
    loca.classList.toggle('d-none')
    cards.classList.add('d-none')
    sub.classList.toggle('d-none')
    console.log('hi')
})




