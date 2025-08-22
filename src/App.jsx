import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Listing from "./pages/Listing";
import ListingDetails from "./pages/ListingDetails";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import SellerProfile from "./pages/SellerProfile";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";
import BoostListings from "./pages/BoostListings";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    
    <Router>
         <ScrollToTop/>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/listings" element={<Listing />} />
            <Route path="/listingdetails" element={<ListingDetails />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/edit-listing/:id" element={<EditListing />} />
            <Route path="/seller" element={<SellerProfile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/boost" element={<BoostListings />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
