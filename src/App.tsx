import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyMislona from './components/WhyMislona';
import Manufacturing from './components/Manufacturing';
import Distributors from './components/Distributors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Review from './pages/Review';
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminReviews from "./pages/admin/AdminReviews";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminDistributors from "./pages/admin/AdminDistributors";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute";

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        <Hero />

        <Products />
        <WhyMislona />
        <Manufacturing />
        <Distributors />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route path="/" element={<HomePage />} />

        {/* public  Flow */}
        <Route path="/review" element={<Review />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
  path="/admin"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>
<Route
  path="/admin/reviews"
  element={
    <ProtectedAdminRoute>
      <AdminReviews />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/analytics"
  element={
    <ProtectedAdminRoute>
      <AdminAnalytics />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/settings"
  element={
    <ProtectedAdminRoute>
      <AdminSettings />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/distributors"
  element={
    <ProtectedAdminRoute>
      <AdminDistributors />
    </ProtectedAdminRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}