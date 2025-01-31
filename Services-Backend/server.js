const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/e-waste', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define Schemas and Models

// Schema for Computers
const ComputerSchema = new mongoose.Schema({
  computerType: String,
  manufacturer: String,
  model: String,
  yearOfPurchase: Number,
  condition: String,
  isWorking: Boolean,
  accessories: [String],
  pickupAddress: String,
  contactNumber: String,
  recyclingPreference: String,
});

const Computer = mongoose.model('Computer', ComputerSchema);

// Schema for Cart Details
const CartSchema = new mongoose.Schema({
  name: String,
  priceEstimation: Number,
  email: String,
  phoneNumber: String,
  selectedComputer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Computer', // Reference to the Computer model
  },
});

const Cart = mongoose.model('Cart', CartSchema);

// POST route to handle cart submission
app.post('/submit-cart', async (req, res) => {
  try {
    const { name, priceEstimation, email, phoneNumber, selectedComputer } = req.body;
    const newCart = new Cart({
      name,
      priceEstimation,
      email,
      phoneNumber,
      selectedComputer,
    });
    await newCart.save();
    res.status(201).send('Cart details saved successfully');
  } catch (error) {
    res.status(500).send('Error saving cart details');
  }
});

app.post('/submit-cart', async (req, res) => {
    try {
      const { name, priceEstimation, email, phoneNumber, selectedComputer } = req.body;
      const newCart = new Cart({
        name,
        priceEstimation,
        email,
        phoneNumber,
        selectedComputer,
      });
      await newCart.save();
      res.status(201).send('Cart details saved successfully');
    } catch (error) {
      console.error('Error saving cart details:', error);
      res.status(500).send('Error saving cart details');
    }
  });
  
// GET route to fetch all computer data
app.get('/computers', async (req, res) => {
  try {
    const computers = await Computer.find(); // Fetch all computer entries
    res.status(200).json(computers);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Start the server
const port = 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
