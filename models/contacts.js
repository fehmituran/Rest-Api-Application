const fs = require("fs/promises");
const path = require("path");
//const { nanoid } = require('nanoid');
const colors = require("colors");

const contactsPath = path.join(__dirname, "contacts.json");
const { v4 } = require("uuid");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return error;
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    console.log(contacts)
    const contact = contacts.find((item) => item.id === contactId);
    console.log(contact)
    return contact || null;
  } catch (error) {
    return error;
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }

    const [result] = contacts.splice(index, 1);
    //const newContacts = contacts.filter((contact) => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log(`contact with ID ${contactId} removed successfully`.red);
    return result;
  } catch (error) {
    return error;
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: v4(), ...body };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log(`contact with Name ${body.name} added successfully`.green);
    return newContact;
  } catch (error) {
    return error;
  }
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return console.log(`contact with ID ${contactId} not found`.yellow);
  }

  contacts[index] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(`contact with ID ${contactId} updated successfully`.green);
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
