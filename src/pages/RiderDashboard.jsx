import React, { useState } from "react";

const initialAssignedOrders = [
  {
    id: "ORD-001",
    customer: "Tolu A.",
    address: "13 Adeola Odeku St, VI, Lagos",
    status: "In Transit",
  },
{
    id: "ORD-002",
    customer: "Hspr Talon.",
    address: "13 Adeola Odeku St, VI, Lagos",
    status: "In Transit",
  },
  {
    id: "ORD-003",
    customer: "Obass Clyde",
    address: "25 Awolowo Road, Ikoyi",
    status: "Active Now",
  },
];

export default function RiderDashboard() {
  const [assignedOrders, setAssignedOrders] = useState(initialAssignedOrders);
  const [isOnline, setIsOnline] = useState(true);

  const markAsDelivered = (orderId) => {
    const updated = assignedOrders.map((order) =>
      order.id === orderId ? { ...order, status: "Delivered" } : order
    );
    setAssignedOrders(updated);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Welcome, Rider 🚴‍♂️</h1>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            isOnline ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      <div className="bg-white p-5 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Assigned Orders</h2>
        {assignedOrders.length === 0 ? (
          <p className="text-gray-500">No orders assigned yet.</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignedOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.customer}</td>
                  <td className="px-4 py-2">{order.address}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {order.status === "In Transit" && (
                      <button
                        onClick={() => markAsDelivered(order.id)}
                        className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Mark Delivered
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

