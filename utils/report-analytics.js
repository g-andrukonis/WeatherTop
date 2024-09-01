export const reportAnalytics = {
  
  getMinTemperature(object) {
    let minTemperature = null;
    if (object.reports.length > 0) {
      minTemperature = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].temp < minTemperature.temp) {
          minTemperature = object.reports[i];
        }
      }
    }
    return minTemperature;
  },

  getMaxTemperature(object) {
    let maxTemperature = null;
    if (object.reports.length > 0) {
      maxTemperature = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].temp > maxTemperature.temp) {
          maxTemperature = object.reports[i];
        }
      }
    }
    return maxTemperature;
  },

  getMinWind(object) {
    let minWind = null;
    if (object.reports.length > 0) {
      minWind = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].windSpeed < minWind.windSpeed) {
          minWind = object.reports[i];
        }
      }
    }
    return minWind;
  },
  
  getMaxWind(object) {
    let maxWind = null;
    if (object.reports.length > 0) {
      maxWind = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].windSpeed > maxWind.windSpeed) {
          maxWind = object.reports[i];
        }
      }
    }
    return maxWind;
  },
  
  getMinPressure(object) {
    let minPressure = null;
    if (object.reports.length > 0) {
      minPressure = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].pressure < minPressure.pressure) {
          minPressure = object.reports[i];
        }
      }
    }
    return minPressure;
  },
  
  getMaxPressure(object) {
    let maxPressure = null;
    if (object.reports.length > 0) {
      maxPressure = object.reports[0];
      for (let i = 1; i < object.reports.length; i++) {
        if (object.reports[i].pressure > maxPressure.pressure) {
          maxPressure = object.reports[i];
        }
      }
    }
    return maxPressure;
  },

};