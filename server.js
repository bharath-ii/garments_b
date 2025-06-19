// server.js
const express = require('express');
const cors = require('cors');
const machines = require('./data');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS config to allow only your frontend domain
const corsOptions = {
  origin: 'https://garments-f.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));

// Serve static images from /public/images
app.use('/images', express.static('public/images'));

// Endpoint to send machine data
app.get('/machines', (req, res) => {
  res.json(machines);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
