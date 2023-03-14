const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define the routes for each endpoint
router.get('/random', userController.getRandomUser);
router.get('/all', userController.getAllUsers);
router.post('/save', userController.saveUser);
router.patch('/update/:id', userController.updateUser);
router.patch('/bulk-update', userController.bulkUpdateUsers);
router.delete('/:id', userController.deleteUser);

module.exports = router;
