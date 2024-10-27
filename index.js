// The Brain of our backend
import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();


const PORT = process.env.PORT;
const mongoURI = process.env.CONNECTION_STRING;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({}); //Finds everything in the database
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

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