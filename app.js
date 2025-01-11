const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const mongoose = require('mongoose');

// Replace <your-database-url> with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/your-database-name';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));