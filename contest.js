let search = async () => {
  document.getElementById("api-data").innerHTML = ``;
  let searchCity = document.getElementById("searchCity").value;
  document.getElementById("loader").classList.toggle("d-none");
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${ searchCity }&key=1080915772f94aafbbe180329242908`
    );
    let results = await response.json();
    document.getElementById("loader").classList.toggle("d-none");

    var innerhtml = `
   <table class="table table-striped mr-2">
      <tr style="background-color:#29dfc47d !important;"><th colspan="2" style="text-align:center;">Location</th></tr>
      <tr><td>City</td><td>${ results.location.name }</td></tr>
      <tr><td>Lattitude</td><td>${ results.location.lat }</td></tr>
      <tr><td>Longitude</td><td>${ results.location.lon }</td></tr>
      <tr><td>Local Time</td><td>${ results.location.localtime }</td></tr>
      <tr><td>Last Updated</td><td>${ results.current.last_updated }</td></tr>
    </table>
    <table class="table table-striped ml-2">
      <tr style="background-color:#29dfc47d !important;"><th colspan="2" style="text-align:center;">Weather</th></tr>
      <tr><td>Temperature</td><td> ${ results.current.temp_c } °C</td></tr>
      <tr><td>Feels Like</td><td>${ results.current.feelslike_c } °C</td></tr>
      <tr><td>Condition</td><td>${ results.current.condition.text }</td></tr>
      <tr><td>Wind Speed</td><td>${ results.current.wind_kph } kmph</td></tr>
      <tr><td>Humidity</td><td> ${ results.current.humidity } </td></tr>
      <tr><td>Visibility</td><td>${ results.current.vis_km }</td></tr>
    </table>
  `;
  } catch (err) {
    if (err.name == 'TypeError') {
      var innerhtml = `<div class="alert alert-danger text-center">Error: Please enter a valid city name</div>`; 
    } else {
     var innerhtml = `<div class="alert alert-danger text-center">${ err.name }<br>${ err.message }</div>`;
      console.log(err.message);
    }
  }
  document.getElementById("api-data").innerHTML = innerhtml;
};
let re = document.getElementById("searchBtn").addEventListener("click", search);
