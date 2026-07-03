import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b px-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Admin Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back, Admin
        </p>
      </div>

      <button className="relative">
        <Bell className="text-slate-700" />

        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
      </button>
    </header>
  );
}