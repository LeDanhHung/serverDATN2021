// const express = require('express');
// const authController = require('./auth.Controller');
// const Router = express.Router();

import express from 'express'
// const express =  express();
import * as  authController from './auth.Controller.js'
const Router = express.Router();



Router.post('/register',authController.register);
Router.post('/login',authController.login);
// verifyToken
Router.get('/getUser/:id',authController.getListUserId);
Router.get('/getUser',authController.getListUser);
Router.put('/updateUser/:id',authController.UpdateOneUser);
Router.delete('/deleteUser/:id',authController.DelateOneUser);

export {Router}  ;