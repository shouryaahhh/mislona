import AdminLayout from "../../components/admin/AdminLayout";
import StatCard from "../../components/admin/StatCard";

import {
  Users,
  Star,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
  title="Total Reviews"
  value="0"
  icon={<Star className="text-pink-600" />}
/>

<StatCard
  title="Approved Reviews"
  value="0"
  icon={<Star className="text-green-600" />}
/>

<StatCard
  title="Pending Reviews"
  value="0"
  icon={<Star className="text-yellow-600" />}
/>

<StatCard
  title="Distributor Requests"
  value="0"
  icon={<Users className="text-blue-600" />}
/>

      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold mb-4">
          Welcome to Mislona Admin Dashboard
        </h2>

        <p className="text-slate-500">
          Manage customer reviews, distributor inquiries, and monitor your Mislona business from one place.
        </p>
      </div>
    </AdminLayout>
  );
}