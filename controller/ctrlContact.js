const service = require('../models/contacts');
const validation = require('../validation/validation')

const get = async (req, res, next) => {
  
    try{   
        const results = await service.getAllContacts();
        res.json({
            status: "success",
            code: 200,
            data: {
                contacts: results,
            }
        })
    }
    catch (e) {
        console.error(e);
        next(e);
    }
};


const getById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const results = await service.getContactById(id);
        if(results){
            res.json({
                status: 'success',
                code: 200,
                data: {contact: results}
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `not found contact ${id}`,
                data: 'not found',
            })
        }
    }
    catch(e){
        console.error(e);
        next(e);
    }
}


const create = async (req, res, next) => {
  
    const { error } = validation.contactValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { name, email, phone, favorite } = req.body

    try{
        const result = await service.createContact({ name, email, phone, favorite })
        res.json({
            status: 'success',
            code: 201,
            data: {contact: result},
        })
    }catch(e){
        console.error(e);
        next(e);
    }
};


const update = async (req, res, next) => {
    const {id} = req.params;

    const { error } = validation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { name, email, phone, favorite } = req.body
    try{
        const result = await service.updateContact(id, { name, email, phone, favorite })
        if(result){
            res.json({
                status: "success",
                code: 200,
                data: {contact: result},
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `not found contact ${id}`,
                data: 'not found',
            })
        }
    }
    catch(e){
        console.error(e);
        next(e);
    }
}

const updateStatusContact = async (req, res, next) => {
    const {id} = req.params;

    try{
        const result = await service.updateContact(id, req.body )
        if(result){
            res.json({
                status: "success",
                code: 200,
                data: {contact: result},
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `not found contact ${id}`,
                data: 'not found',
            })
        }
    }
    catch(e){
        console.error(e);
        next(e);
    }
}


const remove = async (req, res, next) => {
    const {id} = req.params;
    try{
        const result = await service.removeContact(id)
        if(result){
            res.json({
                status: 'success',
                code: 200,
                message: "Contact has been deleted"
            })
        }else{
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found contact id: ${id}`,
                data: 'Not Found',
              });
        }
    }catch(e){
        console.error(e);
        next(e);
    }
}

module.exports = {
    get,
    getById,
    remove,
    create,
    update,
    updateStatusContact,
}