const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
connectDB();

// 🔥 ADD THIS
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);

module.exports = app;
