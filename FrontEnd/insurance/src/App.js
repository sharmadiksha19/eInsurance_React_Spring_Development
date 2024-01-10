import "./App.css";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import VehiclePage from "./components/VehiclePage";
import RentPage from "./components/RentPage";
import HealthPage from "./components/HealthPage";
import Register from "./components/Register.js";
import AdminHome from "./components/Admin/AdminHome.js";
import Dashboard from "./components/Admin/Dashboard.js";
import AdminLogin from "./components/Admin/AdminLogin.js";
import OpenAI from "./components/OpenAI";
import UserForm from "./components/Admin/UserForm.js";
import DisplayPackages from "./components/DisplayPackages.js";
import AIDisplay from "./components/AIDisplay.js";
import Checkout from "./components/Checkout.js";
import Customer from "./components/Customer.js";
import Profile from "./components/Profile.js";
import Policy from "./components/Policy.js";
import DisplayPackagesRe from "./components/DisplayPackagesRe.js";
import CheckoutRe from "./components/CheckoutRe.js";
import DisplayPackagesRent from "./components/DisplayPackagesRent.js";
import CheckoutRent from "./components/CheckoutRent.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-Home" element={<AdminHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/vehicle" element={<VehiclePage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/rec" element={<OpenAI />} />
        <Route path="/ai" element={<AIDisplay />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/package" element={<DisplayPackages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/packagere" element={<DisplayPackagesRe />} />
        <Route path="/packagerent" element={<DisplayPackagesRent />} />
        <Route path="/checkoutRe" element={<CheckoutRe />} />
        <Route path="/checkoutRent" element={<CheckoutRent />} />

        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
