import { objectStore } from "../models/object-store.js";
import { reportStore } from "../models/report-store.js";
import { reportAnalytics } from "../utils/report-analytics.js";

export const objectController = {
  async index(request, response) {
    const object = await objectStore.getObjectById(request.params.id);
    const minTemperature = reportAnalytics.getMinTemperature(object);
    const maxTemperature = reportAnalytics.getMaxTemperature(object);
    const minWind = reportAnalytics.getMinWind(object);
    const maxWind = reportAnalytics.getMaxWind(object);
    const minPressure = reportAnalytics.getMinPressure(object);
    const maxPressure = reportAnalytics.getMaxPressure(object);
    const viewData = {
      title: "Station",
      object: object,
      minTemperature: minTemperature,
      maxTemperature: maxTemperature,
      minWind: minWind,
      maxWind: maxWind,
      minPressure: minPressure,
      maxPressure: maxPressure,
    };
    response.render("object-view", viewData);
  },

  async addReport(request, response) {
    const object = await objectStore.getObjectById(request.params.id);
    const newReport = {
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding report ${newReport.title}`);
    await reportStore.addReport(object._id, newReport);
    response.redirect("/object/" + object._id);
  },

  async deleteReport(request, response) {
    const objectId = request.params.objectid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${objectId}`);
    await reportStore.deleteReport(reportId);
    response.redirect("/object/" + objectId);
  },
};