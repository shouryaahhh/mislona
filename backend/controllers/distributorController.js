const supabase = require("../config/supabase");

// POST /api/distributors
async function createDistributorRequest(req, res) {
  try {
    const {
      business_name,
      owner_name,
      mobile,
      email,
      state,
      city,
      pincode,
      address,
      years_in_business,
      current_brands,
      monthly_capacity,
      gst_number,
      message,
    } = req.body;

    if (!business_name || !owner_name || !mobile) {
      return res.status(400).json({
        error: "Business name, owner name and mobile are required.",
      });
    }

    const { data, error } = await supabase
      .from("distributor_requests")
      .insert([
        {
          business_name,
          owner_name,
          mobile,
          email,
          state,
          city,
          pincode,
          address,
          years_in_business,
          current_brands,
          monthly_capacity,
          gst_number,
          message,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return res.status(201).json({
      success: true,
      message: "Distributor request submitted successfully.",
      application: data,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Failed to submit distributor request.",
    });
  }
}

// GET /api/distributors
async function getDistributorRequests(req, res) {
  try {
    const { data, error } = await supabase
      .from("distributor_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to fetch distributor requests.",
    });
  }
}

module.exports = {
  createDistributorRequest,
  getDistributorRequests,
};