import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedAdminRoute({ children }: Props) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return (
  <Navigate
    to="/mislona-detergent-admin-94100/login"
    replace
  />
);
  }

  return <>{children}</>;
}