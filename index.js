const express = require('express');
const cors = require('cors');
const app = express();

// Render provides a port, or we default to 3000 for local development
const PORT = process.env.PORT || 3000;

// Use the cors middleware
app.use(cors());

// A simple API endpoint
app.get('/api/greeting', (req, res) => {
  res.json({ message: "Hello from the backend! 👋" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
