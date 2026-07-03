const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");
const {
  login,
  getDashboard,
  getReviews,
  approveReview,
  deleteReview,
} = require("../controllers/adminController");

router.post("/login", login);

router.get(
  "/dashboard",
  verifyToken,
  adminMiddleware,
  getDashboard
);
router.get(
  "/reviews",
  verifyToken,
  adminMiddleware,
  getReviews
);

router.patch(
  "/reviews/:id/approve",
  verifyToken,
  adminMiddleware,
  approveReview
);

router.delete(
  "/reviews/:id",
  verifyToken,
  adminMiddleware,
  deleteReview
);

module.exports = router;