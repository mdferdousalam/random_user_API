const faker = require('faker');

// Define a utility function to generate random user data
exports.generateRandomUserData = () => {
    const userData = {
        id: faker.datatype.uuid(),
        gender: faker.random.arrayElement(['male', 'female']),
        name: faker.name.findName(),
        contact: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        photoUrl: faker.image.avatar()
    };

    return userData;
};
