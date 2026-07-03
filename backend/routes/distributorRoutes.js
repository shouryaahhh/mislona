const express = require("express");
const router = express.Router();

const {
  createDistributorRequest,
  getDistributorRequests,
} = require("../controllers/distributorController");

// Get all distributor requests
router.get("/", getDistributorRequests);

// Submit distributor request
router.post("/", createDistributorRequest);

module.exports = router;