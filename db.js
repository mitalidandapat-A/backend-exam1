const mongoose = require('mongoose');
const env = require('dotenv').config();

const test= async () => {
    await mongoose.connect(process.env.DB);
    console.log('MongoDB connected');
}
test().catch(err => console.error('MongoDB connection error:', err));