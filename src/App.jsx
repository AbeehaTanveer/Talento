import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Listing from "./pages/Listing";
import ListingDetails from "./pages/ListingDetails";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import SellerProfile from "./pages/Dashboard"; // <-- Dashboard Layout
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";
import BoostListings from "./pages/BoostListings";
import NotFound from "./pages/NotFound";
import TagsPage from "./pages/TagsPage";
import ReviewPage from "./pages/ReviewPage";
import ChatList from "./pages/Chatlist";
import PendingBuyer from "./pages/PendingBuyer";
import Pendingseller from "./pages/PendingSeller";
import GamingPage from "./pages/GamingPage";
import BuyerProfilePage from "./pages/BuyerProfile";
import PublicProfile from "./components/PublicProfile";
import PurchaseHistory from "./components/PurchaseHistory";
import Dashboard from "./pages/Dashboard";

// ✅ Wrapper so we can use useLocation inside
function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/trivia"; // Hide navbar + footer on trivia page

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/listingdetails" element={<ListingDetails />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing/:id" element={<EditListing />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/boost" element={<BoostListings />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/pendingbuyer" element={<PendingBuyer />} />
          <Route path="/pendingseller" element={<Pendingseller />} />
          <Route path="/trivia" element={<GamingPage />} />
          <Route path="/buyerProfile" element={<BuyerProfilePage />} />
          <Route path="/chats" element={<ChatList />} />
          <Route path="/profile" element={<PublicProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/purchases" element={<PurchaseHistory />} />

       

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
