import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
          reviews: 0,
          distributors: 0,
        });

  useEffect(() => {
    loadStats();
  }, []);

async function loadStats() {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/admin/login");
    return;
  }

  try {
    // Dashboard statistics
    const statsResponse = await fetch(
      "http://localhost:5000/api/admin/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const statsData = await statsResponse.json();

    if (!statsResponse.ok) {
      alert(statsData.error);
      return;
    }

      setStats({
      reviews: statsData.reviews,
      distributors: statsData.distributors,
    });

  } catch (err) {
    console.error(err);
    alert("Failed to load admin dashboard.");
  }
}
return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-8">
      Mislona Admin Dashboard
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-gray-500">Reviews</h3>
        <p className="text-3xl font-bold">{stats.reviews}</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-gray-500">Distributor Leads</h3>
        <p className="text-3xl font-bold">{stats.distributors}</p>
      </div>
    </div>
  </div>
);
}