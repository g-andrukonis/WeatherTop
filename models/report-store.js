import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("reports");

export const reportStore = {
  async getAllReports() {
    await db.read();
    return db.data.reports;
  },

  async addReport(objectId, report) {
    await db.read();
    report._id = v4();
    report.objectid = objectId;
    db.data.reports.push(report);
    await db.write();
    return report;
  },

  async getReportsByObjectId(id) {
    await db.read();
    return db.data.reports.filter((report) => report.objectid === id);
  },

  async getReportById(id) {
    await db.read();
    return db.data.reports.find((report) => report._id === id);
  },

  async deleteReport(id) {
    await db.read();
    const index = db.data.reports.findIndex((report) => report._id === id);
    db.data.reports.splice(index, 1);
    await db.write();
  },

  async deleteAllReports() {
    db.data.reports = [];
    await db.write();
  },

  async updateReport(report, updatedReport) {
    report.code = updatedReport.code;
    report.temp = updatedReport.temp;
    report.windSpeed = updatedReport.windSpeed;
    report.windDirection = updatedReport.windDirection;
    report.pressure = updatedReport.pressure;
    await db.write();
  },
};