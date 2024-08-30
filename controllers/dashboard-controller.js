import { objectStore } from "../models/object-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "WeatherTop Dashboard",
      objects: await objectStore.getAllObjects(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addObject(request, response) {
    const newObject = {
      title: request.body.title,
    };
    console.log(`adding object ${newObject.title}`);
    await objectStore.addObject(newObject);
    response.redirect("/dashboard");
  },
};
