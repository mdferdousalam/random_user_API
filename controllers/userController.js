const faker = require('faker');
const userService = require('../services/userService');

exports.getRandomUser = async (req, res) => {
    try {
        const randomUser = await userService.getRandomUser();
        res.json(randomUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        // Check if a limit parameter was provided and set a limit if so
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;

        // Get all users from the database
        const users = await userService.getAllUsers(limit);
        res.json(users);
    } catch (err) {

    }
};

exports.saveUser = async (req, res) => {
    try {
        // Generate a random user data
        const userData = {
            id: faker.datatype.uuid(),
            gender: faker.random.arrayElement(['male', 'female']),
            name: faker.name.findName(),
            contact: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            photoUrl: faker.image.avatar(),
            ...req.body // Merge in the request body, which may contain additional or updated properties
        };

        // Create a new user in the database
        const savedUser = await userService.createUser(userData);
        res.json(savedUser);
    } catch (err) {

    }
};

exports.updateUser = async (req, res) => {
    try {
        // Update the user with the specified ID
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (err) {

    }
};

exports.bulkUpdateUsers = async (req, res) => {
    try {
        // Check if the request body contains an array of user IDs
        if (!Array.isArray(req.body.ids)) {
            throw new Error('ids property must be an array');
        }

        // Update each user with the specified ID
        const updatedUsers = await userService.bulkUpdateUsers(req.body.ids, req.body.update);
        res.json(updatedUsers);
    } catch (err) {

    }
};

exports.deleteUser = async (req, res) => {
    try {
        // Delete the user with the specified ID
        const deletedUser = await userService.deleteUser(req.params.id);
        res.json(deletedUser);
    } catch (err) {

    }
};
