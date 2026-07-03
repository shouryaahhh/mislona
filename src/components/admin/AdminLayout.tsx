import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}