require('dotenv').config();

const express = require('express');
const cors = require('cors');
const reviewRoutes = require("./routes/review");
const adminRoutes = require("./routes/admin");
const distributorRoutes = require("./routes/distributorRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Mislona Backend Running'
  });
});

// Routes

app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/distributors", distributorRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});