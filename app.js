

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose');
const path = require("path");
//const upload = require("./middleware/uploadFile");
const multer = require('multer')

const contactsRouter = require('./routes/api/contacts');
const usersRouter = require('./routes/api/user');

const app = express();
app.use(express.static('public')); 

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';



app.use('/avatars', express.static(path.join(__dirname, 'public/avatars')))









require('dotenv').config();
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

require('./config/config-passport')



app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app