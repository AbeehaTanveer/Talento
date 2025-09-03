import React from 'react';

// Shared Components
export const ItemCard = ({ image, title, price, onClick }) => (
  <div 
    className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
    onClick={onClick}
  >
    <img 
      src={image} 
      alt={title}
      className="w-full h-32 object-cover rounded-md"
    />
    <h4 className="font-medium mt-2">{title}</h4>
    <p className="text-blue-500 font-bold">{price}</p>
  </div>
);

export const StatCard = ({ value, label }) => (
  <div className="border rounded-lg p-4 text-center">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export const SectionTitle = ({ children }) => (
  <h3 className="text-lg font-semibold mb-4">{children}</h3>
);

export const EmptyState = ({ message }) => (
  <div className="text-center py-8 text-gray-500">
    <p>{message}</p>
  </div>
);

// Updated BuyerSection with shared components
export const BuyerSection = ({ favorites, recentOrders }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <SectionTitle>Favorites</SectionTitle>
      {favorites.length === 0 ? (
        <EmptyState message="No favorites yet" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map(item => (
            <ItemCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      )}
      
      <SectionTitle>Recent Orders</SectionTitle>
      {recentOrders.length === 0 ? (
        <EmptyState message="No orders yet" />
      ) : (
        <div className="space-y-3">
          {recentOrders.map(order => (
            <div key={order.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h4 className="font-medium">{order.item}</h4>
                <p className="text-gray-600">Ordered on {order.date}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Updated SellerSection with shared components
export const SellerSection = ({ shopStats, listings, reviews }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <SectionTitle>Shop Stats</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard value={shopStats.orders} label="Orders" />
        <StatCard value={`${shopStats.rating}/5`} label="Rating" />
        <StatCard value={`$${shopStats.revenue}`} label="Revenue" />
      </div>
      
      <SectionTitle>Your Listings</SectionTitle>
      {listings.length === 0 ? (
        <EmptyState message="No listings yet" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listings.map(listing => (
            <ItemCard
              key={listing.id}
              image={listing.image}
              title={listing.title}
              price={listing.price}
            />
          ))}
        </div>
      )}
      
      <SectionTitle>Recent Reviews</SectionTitle>
      {reviews.length === 0 ? (
        <EmptyState message="No reviews yet" />
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{review.user}</h4>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{review.rating}</span>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-2">{review.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};