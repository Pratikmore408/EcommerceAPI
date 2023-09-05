// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const db = require('./config/mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect(mongoose.db, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes  
app.use('/products', productRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





