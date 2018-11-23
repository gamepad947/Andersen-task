dataModule.getLocation(success, error);
function success(pos) {
  var data = dataModule.getData(`https://api.openweathermap.org/data/2.5/weather?
	lat=${pos.coords.latitude}&
	lon=${pos.coords.longitude}&
	units=metric&APPID=1713de24b31c3508f06044a0598fa751`);
  data
    .then(function (res) {
      return view.render(res);
    })
}
function error() {
  console.log("Error");
}
