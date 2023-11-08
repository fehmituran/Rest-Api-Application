const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const secret = process.env.SECRET;
const validation = require("../validation/validation");
const userAuth = require("../middleware/authUser");

const registration = async (req, res, next) => {
  const { error } = validation.userValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({
      status: "error",
      code: 409,
      message: "Email is already in use",
      data: "Conflict",
    });
  }

  try {
    const newUser = new User({ email, subscription });
    newUser.setPassword(password);
    await newUser.save();

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          email: newUser.email,
          subscription: newUser.subscription,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal Server Error",
      data: "Registration Failure",
    });
    next(e)
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

 

  if (!user) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "User not found",
      data: "Not Found",
    });
  }

  if (!user || !user.validPassword(password)) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Email or password is wrong",
      data: "Bad request",
    });
  }

  try {
    const payload = {
      id: user.id,
      email: user.email,
      subscription: user.subscription,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "1h" });
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        token,
        user: {
          email: `${payload.email}`,
          subscription: `${payload.subscription}`,
        },
      },
    });

    user.token = token;
    await user.save();

  
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: "Bad request",
      code: 400,
      message: "Login failed",
    });
  }
};

const logout = async (req, res, next) => {
  try {
    const { user } = req;
    console.log(user)
    user.token = null;
	await user.save();
  
    res.status(204, "No Content").json();
  } catch (error) {
    next(error);
  }
  
};


const current = (req, res, next) => {
    try {
        const { email, subscription } = req.user;
        res.json({
          status: 'OK',
          code: 200,
          data: {
            user: {
              email,
              subscription,
            },
          },
        });
      } catch (error) {
        next(error);
      }
};

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  try{
   
    const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true });

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

module.exports = {
  registration,
  login,
  logout,
  current,
  updateSubscription,
};
