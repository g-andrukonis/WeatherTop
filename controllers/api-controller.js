import axios from "axios";

export const apiController = {
  index(request, response) {
    const viewData = {
      title: "api",
    };
    console.log("api rendering");
    response.render("api-view", viewData);
  },
  
async addReportApi(request, response) {
    console.log("rendering new report");
    let report = {};
    const lat = request.body.lat;
    const lng = request.body.lng;
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7a41842fa32e8bb26d751e128946b323`;
    const result = await axios.get(latLongRequestUrl);
    console.log(latLongRequestUrl)
    if (result.status == 200) {
      const currentWeather = result.data;
      report.code = currentWeather.weather[0].id;
      report.temperature = currentWeather.main.temp;
      report.windSpeed = currentWeather.wind.speed;
      report.pressure = currentWeather.main.pressure;
      report.windDirection = currentWeather.wind.deg;
    }
    console.log(report);
    const viewData = {
      title: "Weather Report",
      reading: report,
    };
    response.render("api-view", viewData);
  },
  
};
