import { request, response } from "express";
import Email from "../model/email.js";

export const saveSentEmails = (request, response) => {
  try {
    const email = new Email(request.body);
    email.save();

    response.status(200).json("Email saved Successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getEmails = async (request, response) => {
  try {
    let emails;
    if (request.params.type === "trash") {
      emails = await Email.find({ bin: true }).sort({ date: -1 });
    } else if (request.params.type === "all mail") {
      emails = await Email.find({}).sort({ date: -1 });
    } else if (request.params.type === "archive") {
      emails = await Email.find({ archive: true }).sort({ date: -1 });
    } else if (request.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false }).sort({
        date: -1,
      });
    } else {
      emails = await Email.find({ type: request.params.type }).sort({
        date: -1,
      });
    }
    return response.status(200).json(emails);
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("Emails mover to trash Successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const toggleStarredEmails = async (request, response) => {
  try {
    await Email.updateOne(
      { _id: request.body.id },
      { $set: { starred: request.body.value } }
    );
    return response.status(200).json("Starred");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const moveEmailsToArchive = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { archive: true, type: "archive" } }
    );
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const deleteEmails = async (request, response) => {
  try {
    await Email.deleteMany({ _id: { $in: request.body } });
    return response.status(200).json("Mail deleted Successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const markAsReadEmails = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: request.body.id },
      { $set: { read: request.body.value } }
    );
    return response.status(200).json("Emails read");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const searchEmails = async (request, response) => {
  try {
    const query = request.body.query;

    const emails = await Email.find({ $text: { $search: query } });
    response.status(200).json(emails);
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};
