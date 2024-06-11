function check() {
  let city = document.getElementById('place').value
  let name=document.getElementById('name')
  let degree=document.getElementById("degree")
  let wind=document.getElementById('wind')
  let humidity=document.getElementById('humidity')
  
  let apikey ="24d1486adc3f177ac226fac2b775eb97"
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      name.innerHTML=data.name
      wind.innerHTML= data.wind.speed+'km/h'
     degree.innerHTML=Math.floor(data.main.feels_like-273)+'°C'
     humidity.innerHTML=data.main.humidity+'%'

    });
}