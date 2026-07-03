require("dotenv").config();

const bcrypt = require("bcrypt");
const supabase = require("./config/supabase");

async function updateAdmin() {
  const username = "admin";
  const password = "Admin@9837";

  const passwordHash = await bcrypt.hash(password, 10);

  const { error } = await supabase
    .from("admins")
    .update({
      password_hash: passwordHash,
    })
    .eq("username", username);

  if (error) {
    console.error(error);
  } else {
    console.log("✅ Admin password updated successfully!");
  }
}

updateAdmin();