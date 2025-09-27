const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const requestRoutes = require('./routes/requests');

// Load environment variables (optional)
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/requests', requestRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('✅ Jeevan Setu Backend is running...');
});

// Database connection (optional)
const connectDB = require('./config/db');
connectDB().catch(err => {
  console.log('📝 Continuing without database connection...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
