import { objectStore } from "../models/object-store.js";
import { reportStore } from "../models/report-store.js";

export const objectController = {
  async index(request, response) {
    const object = await objectStore.getObjectById(request.params.id);
    const viewData = {
      title: "Station",
      object: object,
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
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/object/" + objectId);
  },
};