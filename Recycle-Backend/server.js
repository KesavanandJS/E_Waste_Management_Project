const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/biddingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Mongoose Schema and Model
const bidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  biddingPrice: { type: Number, required: true },
  productId: { type: String, required: true },
});

const Bid = mongoose.model('Bid', bidSchema);

// API Routes
app.post('/api/accept', async (req, res) => {
  try {
    const { name, phone, biddingPrice, productId } = req.body;

    // Create a new bid document
    const newBid = new Bid({
      name,
      phone,
      biddingPrice,
      productId,
    });

    // GET endpoint for retrieving all bids
  app.get('/api/bids', async (req, res) => {
    try {
      const bids = await Bid.find(); // Fetch all bids
      res.status(200).json(bids);
    } catch (error) {
      console.error('Error fetching bids:', error);
      res.status(500).json({ message: 'Failed to fetch bids.' });
    }
  });

    

    // Save to database
    await newBid.save();

    res.status(201).json({ message: 'Bid submitted successfully!' });
  } catch (error) {
    console.error('Error saving bid:', error);
    res.status(500).json({ message: 'Failed to submit bid.' });
  }
});

// Start the Server
const PORT = 6002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
