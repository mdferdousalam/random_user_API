const mongoose = require('mongoose');

// Define the database connection URI
const DB_URI = 'mongodb://localhost:27017/my-api';

// Connect to the database
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.error('Error connecting to database:', err);
    });
