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

};