import React, { useState } from "react";
import CreateOrderForm from "../components/Createorderform";
import AssignRiderModal from "../components/AssignRiderModal";

export default function MerchantDashboard() {
  const [orders, setOrders] = useState([
    // ...your sample orders here
  ]);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleCreateOrder = (data) => {
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      customer: data.customerName,
      address: data.address,
      status: "Pending",
      rider: null,
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleOpenAssignModal = (orderId) => {
    setSelectedOrderId(orderId);
    setShowAssignModal(true);
  };

  const handleAssignRider = (orderId, rider) => {
    const updated = orders.map((order) =>
      order.id === orderId ? { ...order, rider, status: "In Transit" } : order
    );
    setOrders(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, Merchant 👋</h1>

      <CreateOrderForm onCreate={handleCreateOrder} />

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Your Recent Orders</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Assigned Rider</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {order.rider || (
                    <button
                      onClick={() => handleOpenAssignModal(order.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Assign Rider
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assign Rider Modal */}
      <AssignRiderModal
        visible={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        onAssign={handleAssignRider}
        orderId={selectedOrderId}
      />
    </div>
  );
}

