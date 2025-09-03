import React from "react";
import { Outlet } from "react-router-dom";

// Purchase History Component
const purchases = [
  {
    id: 1,
    title: "iPhone 13 Pro Max - 256GB",
    price: "$750",
    date: "Oct 15, 2023",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80",
  },
  {
    id: 2,
    title: "Samsung Galaxy S22 Ultra",
    price: "$700",
    date: "Sep 28, 2023",
    status: "Disputed",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 3,
    title: "MacBook Air M1 2020",
    price: "$850",
    date: "Aug 12, 2023",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
];

const PurchaseHistory = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Purchase History</h2>

      {purchases && purchases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4"
            >
              <img
                src={purchase.image}
                alt={purchase.title}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 truncate">{purchase.title}</h3>
                <p className="text-gray-600 text-sm mt-1">Purchased: {purchase.date}</p>
                <p className="font-bold text-gray-800 mt-1">{purchase.price}</p>
              </div>

              <div className="flex-shrink-0">
                {purchase.status === "Confirmed" && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>✅</span> Confirmed
                  </span>
                )}
                {purchase.status === "Disputed" && (
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>⚠️</span> Disputed
                  </span>
                )}
                {purchase.status === "Ignored" && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>❌</span> Ignored
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <div className="text-gray-400 text-5xl mb-4">🛒</div>
          <h3 className="text-gray-600 font-medium">No purchase history yet</h3>
          <p className="text-gray-500 text-sm mt-1">Your purchases will appear here</p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default PurchaseHistory;