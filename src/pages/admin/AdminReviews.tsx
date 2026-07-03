import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

import {
  MessageSquare,
  Star,
  ThumbsUp,
  Search,
  Eye,
  MapPin,
  Calendar,
  User,
  Trash2,
  X,
} from "lucide-react";

type Review = {
  id: string;
  name: string;
  city: string | null;

  overall_rating: number;
  cleaning_rating: number;
  foam_rating: number;
  fragrance_rating: number;
  value_rating: number;

  buy_again: string;

  feedback: string;

  created_at: string;
};

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedReview, setSelectedReview] =
    useState<Review | null>(null);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        "https://mislona-backend.onrender.com/api/admin/reviews",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setReviews(data);
      } else {
        setReviews([]);
      }

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const totalReviews = reviews.length;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, review) =>
              sum + review.overall_rating,
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  const buyAgainPercentage =
    reviews.length > 0
      ? Math.round(
          (reviews.filter(
            (review) => review.buy_again === "Yes"
          ).length /
            reviews.length) *
            100
        )
      : 0;

  const filteredReviews = reviews.filter((review) => {
    const value =
      `${review.name} ${review.city || ""}`.toLowerCase();

    return value.includes(search.toLowerCase());
  });
  function RatingCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-gray-100 rounded-2xl p-5">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        ⭐ {value}/5
      </h3>

    </div>
  );
}

return (
  <AdminLayout>
    <div className="p-8">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Customer Reviews
      </h1>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-xl">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-blue-100">
                Total Reviews
              </p>

              <h2 className="text-5xl font-bold mt-2">
                {totalReviews}
              </h2>
            </div>

            <MessageSquare size={52} />

          </div>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-400 p-6 text-white shadow-xl">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-yellow-100">
                Average Rating
              </p>

              <h2 className="text-5xl font-bold mt-2">
                ⭐ {averageRating}
              </h2>
            </div>

            <Star size={52} />

          </div>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-green-600 to-green-500 p-6 text-white shadow-xl">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-green-100">
                Buy Again
              </p>

              <h2 className="text-5xl font-bold mt-2">
                {buyAgainPercentage}%
              </h2>
            </div>

            <ThumbsUp size={52} />

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by name or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border bg-white pl-12 pr-4 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {loading ? (
  <div className="text-center py-10 text-gray-500">
    Loading reviews...
  </div>
) : filteredReviews.length === 0 ? (
  <div className="bg-white rounded-3xl shadow p-10 text-center text-gray-500">
    No reviews found.
  </div>
) : (
  <div className="space-y-5">

    {filteredReviews.map((review) => (

      <div
        key={review.id}
        className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border"
      >

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left Side */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

                <User
                  size={22}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h2 className="font-bold text-xl">
                  {review.name}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 text-sm">

                  <MapPin size={16} />

                  {review.city || "-"}

                </div>

              </div>

            </div>

          </div>

          {/* Center */}

          <div className="flex items-center gap-6">

            <div>

              <p className="text-gray-500 text-sm">
                Overall Rating
              </p>

              <p className="font-bold text-lg">
                ⭐ {review.overall_rating}/5
              </p>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Submitted
              </p>

              <div className="flex items-center gap-2">

                <Calendar size={16} />

                <span>

                  {new Date(
                    review.created_at
                  ).toLocaleDateString()}

                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <button
            onClick={() => setSelectedReview(review)}
            className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >

            <Eye size={18} />

            View Review

          </button>

        </div>

      </div>

    ))}

  </div>
)} {selectedReview && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">

      {/* Close */}

      <button
        onClick={() => setSelectedReview(null)}
        className="absolute top-5 right-5 text-gray-500 hover:text-black"
      >
        <X size={24} />
      </button>

      <h2 className="text-3xl font-bold mb-8">
        Customer Review
      </h2>

      {/* Name */}

      <div className="flex items-center gap-3 mb-4">
        <User className="text-blue-600" />
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <h3 className="font-semibold text-lg">
            {selectedReview.name}
          </h3>
        </div>
      </div>

      {/* City */}

      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-red-500" />
        <div>
          <p className="text-gray-500 text-sm">City</p>
          <h3 className="font-semibold text-lg">
            {selectedReview.city || "-"}
          </h3>
        </div>
      </div>

      {/* Ratings */}

      <div className="grid md:grid-cols-2 gap-5 mb-8">

        <RatingCard title="Overall Rating" value={selectedReview.overall_rating} />
        <RatingCard title="Cleaning" value={selectedReview.cleaning_rating} />
        <RatingCard title="Foam" value={selectedReview.foam_rating} />
        <RatingCard title="Fragrance" value={selectedReview.fragrance_rating} />
        <RatingCard title="Value For Money" value={selectedReview.value_rating} />

        <div className="bg-gray-100 rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Buy Again
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {selectedReview.buy_again}
          </h3>
        </div>

      </div>

      {/* Feedback */}

      <div className="bg-gray-100 rounded-2xl p-6 mb-6">

        <p className="text-gray-500 mb-2">
          Customer Feedback
        </p>

        <p>
          {selectedReview.feedback}
        </p>

      </div>

      {/* Date */}

      <div className="flex items-center gap-3 mb-8">

        <Calendar />

        <span>
          {new Date(selectedReview.created_at).toLocaleString()}
        </span>

      </div>

      {/* Delete */}

      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 flex items-center justify-center gap-3"
      >
        <Trash2 size={20} />
        Delete Review
      </button>

    </div>

  </div>
)}

    </div>
  </AdminLayout>
);
}