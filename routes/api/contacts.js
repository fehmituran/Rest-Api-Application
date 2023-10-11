const express = require("express");
const contactsData = require("../../models/contacts");
const router = express.Router();
const contactSchema = require("../../validation/validation");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsData.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsData.getContactById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const { error } = contactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const contact = await contactsData.addContact(req.body);

    res.json({
      status: "success",
      code: 201,
      message: "Contact added succesfuly",
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsData.removeContact(contactId);
    
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        contact,
      },
    });

  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {

  try {
    console.log(req.body);
    const { contactId } = req.params;
    const { error } = contactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

   
    const contact = await contactsData.updateContact(contactId, req.body);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      status: "success",
      code: 200,
      message: "Contact added succesfuly",
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
