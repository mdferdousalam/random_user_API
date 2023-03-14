const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbConfig = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Set up middleware to enable CORS
app.use(cors());

// Set up middleware to parse JSON request bodies
app.use(express.json());

// Set up the user routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
