import express from "express";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { objectController } from "./controllers/object-controller.js";
import { aboutController } from "./controllers/about-controller.js";

import { apiController } from "./controllers/api-controller.js";

export const router = express.Router();

router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addobject", dashboardController.addObject);
router.get("/dashboard/deleteobject/:id", dashboardController.deleteObject);
router.get("/object/:id", objectController.index);
router.post("/object/:id/addreport", objectController.addReport);
router.get("/object/:objectid/deletereport/:reportid", objectController.deleteReport);
router.get("/about", aboutController.index);

router.get("/api", apiController.index);
router.post("/api/addreportapi", apiController.addReportApi);
