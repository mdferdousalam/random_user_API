const User = require('../models/userModel');

exports.getAllUsers = async (limit) => {
    const query = User.find();
    if (limit) {
        query.limit(limit);
    }
    return await query.exec();
};

exports.getRandomUser = async () => {
    try {
        const users = await User.find();
        const randomUser = users[Math.floor(Math.random() * users.length)];
        return randomUser;
    } catch (err) {
        throw new Error(`Error getting random user: ${err.message}`);
    }
};


exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

exports.updateUser = async (id, update) => {
    return await User.findByIdAndUpdate(id, update, { new: true });
};

exports.bulkUpdateUsers = async (ids, update) => {
    return await User.updateMany({ _id: { $in: ids } }, update, { new: true });
};

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};
