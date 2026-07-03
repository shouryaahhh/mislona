const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required",
      });
    }

    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("username", username)
      .single();

    if (error || !admin) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }
    const isMatch = await bcrypt.compare(
      password,
      admin.password_hash
    );
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      {
        adminId: admin.id,
        username: admin.username,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
      },
    });
  } catch (err) {
    next(err);
  }
}
async function getDashboard(req, res, next) {
  try {
    const [
      reviews,
      distributors,
    ] = await Promise.all([
      supabase.from("reviews").select("*", { count: "exact", head: true }),
      supabase
        .from("distributor_requests")
        .select("*", { count: "exact", head: true }),
    ]);

    const { count: approvedReviews } = await supabase
      .from("reviews")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("approved", true);

    const pendingReviews =
      (reviews.count || 0) - (approvedReviews || 0);

    res.json({
      reviews: reviews.count || 0,
      distributors: distributors.count || 0,
    });
  } catch (err) {
    next(err);
  }
}
async function getReviews(req, res, next) {
  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function approveReview(req, res, next) {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("reviews")
      .update({
        approved: true,
      })
      .eq("id", id);

    if (error) throw error;

    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteReview(req, res, next) {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
}
module.exports = {
  login,
  getDashboard,
  getReviews,
  approveReview,
  deleteReview,
};