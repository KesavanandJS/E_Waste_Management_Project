const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/e-waste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: false }
});

const User = mongoose.model('User', userSchema);

// E-Waste Submission Schema
const ewasteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  submissionDate: { type: Date, default: Date.now },
  items: [{ type: String, required: true }],
  status: { type: String, default: 'Pending' }  // e.g., Pending, In Progress, Completed
});

const EWaste = mongoose.model('EWaste', ewasteSchema);

// Routes for handling signup and login
app.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ name, email, password, phone });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', userId: user._id, name: user.name });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});



// Route for submitting e-waste collection
app.post('/ewaste/submit', async (req, res) => {
  const { userId, items } = req.body;

  try {
    const newSubmission = new EWaste({ userId, items });
    await newSubmission.save();
    res.status(201).json({ message: 'E-waste collection submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting e-waste', error });
  }
});

// Route for fetching submission history for a user
app.get('/ewaste/history/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const history = await EWaste.find({ userId });
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history', error });
  }
});

// Route for fetching the status of a user's submissions
app.get('/ewaste/status/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const submissions = await EWaste.find({ userId }).select('status items submissionDate');
    res.status(200).json({ submissions });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching status', error });
  }
});

app.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).select('name');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ name: user.name });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
});

// Server setup
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
