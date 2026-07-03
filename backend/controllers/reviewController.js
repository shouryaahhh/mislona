const supabase = require("../config/supabase");

async function submitReview(req, res, next) {
  try {
    const {
      name,
      city,
      rating,
      cleaning_rating,
      foam_rating,
      fragrance_rating,
      value_rating,
      would_buy_again,
      review,
    } = req.body;

    if (!name || !city) {
      return res.status(400).json({
        error: "Name and city are required.",
      });
    }

    const { error } = await supabase
      .from("reviews")
      .insert({
        name,
        city,
        overall_rating: rating,
        cleaning_rating,
        foam_rating,
        fragrance_rating,
        value_rating,
        buy_again: would_buy_again,
        feedback: review,
        approved: false, // Admin will approve before showing publicly
      });

    if (error) throw error;

    return res.json({
      success: true,
      message: "Review submitted successfully.",
    });

  } catch (err) {
    next(err);
  }
}

module.exports = {
  submitReview,
};

module.exports = {
  submitReview,
};