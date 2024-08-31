import { objectStore } from "../models/object-store.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "WeatherTop Dashboard",
      objects: await objectStore.getObjectsByUserId(loggedInUser._id),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addObject(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newObject = {
      title: request.body.title,
      userid: loggedInUser._id,
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
