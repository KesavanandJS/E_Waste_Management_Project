const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/e-waste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define Schema and Model
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

// POST route to handle form data submission
app.post('/submit-computer', async (req, res) => {
  try {
    const newComputer = new Computer(req.body);
    await newComputer.save();
    res.status(201).send('Computer data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving data');
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
const port = 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
