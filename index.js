// The Brain of our backend
import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import dotenv from 'dotenv';
import router from './routes/product.route.js'
const app = express();
dotenv.config();


const PORT = process.env.PORT;
const mongoURI = process.env.CONNECTION_STRING;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/products', router);

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
});

// Connect to the database
mongoose.connect(mongoURI)
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(() => {
    console.log("Error connecting to the DataBase")
});