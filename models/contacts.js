const Contact = require('./schema/contactSchema');


//mongoose -> find()
const getAllContacts = async (skip, limit, findOptions) => {

    const contacts = Contact.find(findOptions)
    .skip(skip)
    .limit(limit);

      return contacts;
    
};


//mongoose -> findOne({filterBY: value})
const getContactById = id => {
    return Contact.findOne({_id: id});
};

//mongoose -> create(data)
const createContact = ({ name, email, phone, favorite, owner }) => {
    return Contact.create({ name, email, phone, favorite, owner });
}

//mongoose -> findByIdAndUpdate
const updateContact = (id, fields) => {
    return Contact.findByIdAndUpdate({ _id: id }, fields, {new: true});
}

const updateStatusContact = (id, body) => {
  return Contact.findByIdAndUpdate(
    { _id: id }, 
    { favorite: body }, 
    { new: true }
  );
}

//mongoose -> findByIdAndRemove
const removeContact = id => {
    return Contact.findByIdAndRemove({_id: id});
};


module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    updateStatusContact,
    removeContact,
}