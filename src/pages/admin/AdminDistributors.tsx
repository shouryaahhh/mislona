import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

type Distributor = {
  id: string;
  business_name: string;
  owner_name: string;
  mobile: string;
  email?: string;
  city?: string;
  state?: string;
  message?: string;
  created_at: string;
};

export default function AdminDistributors() {
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDistributors();
  }, []);

  async function loadDistributors() {
    try {
      const res = await fetch("https://mislona-backend.onrender.com/api/distributors");
      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      setDistributors(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load distributors.");
    } finally {
      setLoading(false);
    }
  }

  const filteredDistributors = distributors.filter((d) => {
    const term = search.toLowerCase();

    return (
      d.business_name.toLowerCase().includes(term) ||
      d.owner_name.toLowerCase().includes(term) ||
      d.mobile.includes(term)
    );
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Distributor Requests
        </h1>

        <p className="text-slate-500 mt-1">
          View and manage all distributor inquiries submitted from the website.
        </p>
      </div>

      {/* Search + Stats */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search business, owner or mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="bg-white rounded-xl shadow-lg border px-6 py-3">
          <p className="text-sm text-gray-500">
            Total Requests
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            {distributors.length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Action</th>
              <th className="text-left p-4">Business</th>
              <th className="text-left p-4">Owner</th>
              <th className="text-left p-4">Mobile</th>
              <th className="text-left p-4">City</th>
              <th className="text-left p-4">Applied</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center p-8">
                  Loading...
                </td>
              </tr>
            ) : filteredDistributors.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-8 text-gray-500">
                  No distributor requests found.
                </td>
              </tr>
            ) : (
              filteredDistributors.map((d) => (
                <tr
                  key={d.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="p-4">
                    <button
                      onClick={() => console.log(d)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      View
                    </button>
                  </td>

                  <td className="p-4 font-medium">
                    {d.business_name}
                  </td>

                  <td className="p-4">
                    {d.owner_name}
                  </td>

                  <td className="p-4">
                    {d.mobile}
                  </td>

                  <td className="p-4">
                    {d.city || "-"}
                  </td>

                  <td className="p-4">
                    {new Date(d.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </AdminLayout>
  );
}