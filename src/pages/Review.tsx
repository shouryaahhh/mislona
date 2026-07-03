
import { useState } from 'react';
import { Star } from 'lucide-react';


export default function Review() {

  const [overallRating, setOverallRating] = useState(0);
  const [cleaningRating, setCleaningRating] = useState(0);
  const [foamRating, setFoamRating] = useState(0);
  const [fragranceRating, setFragranceRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);

  const [buyAgain, setBuyAgain] = useState('');
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState(''); 

const submitReview = async () => {
  if (!name.trim() || !city.trim()) {
  alert("Please enter your name and city.");
  return;
}
  if (
    !overallRating ||
    !cleaningRating ||
    !foamRating ||
    !fragranceRating ||
    !valueRating
  ) {
    alert("Please complete all ratings");
    return;
  }


  try {
    const response = await fetch(
      "https://mislona-backend.onrender.com/api/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          city,
          rating: overallRating,
          cleaning_rating: cleaningRating,
          foam_rating: foamRating,
          fragrance_rating: fragranceRating,
          value_rating: valueRating,
          would_buy_again: buyAgain,
          review: feedback,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.error);
      return;
    }

    alert("Thank you! Your review has been submitted successfully.");

    setName("");
    setCity("");
    setOverallRating(0);
    setCleaningRating(0);
    setFoamRating(0);
    setFragranceRating(0);
    setValueRating(0);
    setBuyAgain("");
    setFeedback("");

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

  const StarRating = ({
    rating,
    setRating,
  }: {
    rating: number;
    setRating: (value: number) => void;
  }) => (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={34}
          onClick={() => setRating(star)}
          className={`cursor-pointer transition-all ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-gray-500 font-medium">
        {rating}/5
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-8 border-b">
          <h1 className="text-4xl font-bold text-slate-900">
            Review Mislona
          </h1>

          <p className="text-gray-500 mt-2">
            We value your feedback. Share your experience with Mislona products.
          </p>
        </div>

        <div className="p-8 space-y-8">

          <div className="grid md:grid-cols-2 gap-5">

  <div>
    <label className="font-semibold block mb-2">
      Your Name <span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      className="w-full border rounded-xl px-4 py-3"
    />
  </div>

  <div>
    <label className="font-semibold block mb-2">
      Your City <span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter your city"
      className="w-full border rounded-xl px-4 py-3"
    />
  </div>

</div>
          <div>
            <p className="font-semibold mb-3">
              Overall Rating
            </p>
            <StarRating
              rating={overallRating}
              setRating={setOverallRating}
            />
          </div>

          <div>
            <p className="font-semibold mb-3">
              Cleaning Rating
            </p>
            <StarRating
              rating={cleaningRating}
              setRating={setCleaningRating}
            />
          </div>

          <div>
            <p className="font-semibold mb-3">
              Foam Rating
            </p>
            <StarRating
              rating={foamRating}
              setRating={setFoamRating}
            />
          </div>

          <div>
            <p className="font-semibold mb-3">
              Fragrance Rating
            </p>
            <StarRating
              rating={fragranceRating}
              setRating={setFragranceRating}
            />
          </div>

          <div>
            <p className="font-semibold mb-3">
              Value For Money
            </p>
            <StarRating
              rating={valueRating}
              setRating={setValueRating}
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Will you buy again?
            </label>

            <select
              value={buyAgain}
              onChange={(e) => setBuyAgain(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Your Feedback
            </label>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience with Mislona..."
              rows={5}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={submitReview}
            className="w-full bg-brand-blue text-white py-4 rounded-xl text-lg font-semibold"
          >
            Submit Review
          </button>

        </div>
      </div>
    </div>
  );
}

