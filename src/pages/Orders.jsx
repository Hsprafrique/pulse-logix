import React from "react";

const mockOrders = [
  { id: "ORD-001", customer: "Alice", rider: "Rider A", status: "In Transit" },
  { id: "ORD-002", customer: "Bob", rider: "Rider B", status: "Delivered" },
];

export default function Orders() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Orders</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Rider</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.rider}</td>
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

