import express from "express";
import {
  deleteEmails,
  getEmails,
  markAsReadEmails,
  moveEmailsToArchive,
  moveEmailsToBin,
  saveSentEmails,
  searchEmails,
  toggleStarredEmails,
} from "../controller/email-controller.js";

const routes = express.Router();

routes.post(`/save`, saveSentEmails);
routes.get("/emails/:type", getEmails);
routes.post("/draft-emails", saveSentEmails);
routes.post("/bin", moveEmailsToBin);
routes.post("/starred", toggleStarredEmails);
routes.post("/archive", moveEmailsToArchive);
routes.post("/read", markAsReadEmails);
routes.delete("/delete", deleteEmails);
routes.post("/search", searchEmails);

export default routes;
