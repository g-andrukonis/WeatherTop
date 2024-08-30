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

  async deleteObject(request, response) {
    const objectId = request.params.id;
    console.log(`Deleting Object ${objectId}`);
    await objectStore.deleteObjectById(objectId);
    response.redirect("/dashboard");
  },
};
