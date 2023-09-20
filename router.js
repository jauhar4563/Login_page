const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middlewares/loginAuth')
const controllers = require('./controllers/controller')

// POST Routes
router.post('/login',controllers.postlogin );
router.get('/dashboard', isAuthenticated,controllers.getDash );

// GET Routes
router.get('/logout', isAuthenticated,controllers.logout);

module.exports = router;
