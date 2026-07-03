import {
  LayoutDashboard,
  Star,
  BarChart3,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/admin",
  },
  {
    icon: Star,
    label: "Reviews",
    path: "/admin/reviews",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/admin/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/admin/settings",
  },
  {
  icon: Store,
  label: "Distributors",
  path: "/admin/distributors",
},
];

export default function Sidebar() {
  const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("adminToken"); 

navigate("/admin/login");
};
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-3xl font-bold tracking-wide">
          MISLONA
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-200"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
  onClick={handleLogout}
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-600 transition"
>
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}