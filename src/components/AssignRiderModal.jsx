import React from "react";

const riders = ["Rider A", "Rider B", "Rider C"];

export default function AssignRiderModal({ visible, onClose, onAssign, orderId }) {
  if (!visible) return null;

  const handleAssign = (rider) => {
    onAssign(orderId, rider);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Assign Rider</h2>
        <p className="mb-4 text-sm text-gray-600">
          Choose a rider for <strong>{orderId}</strong>
        </p>
        <ul className="space-y-2">
          {riders.map((rider) => (
            <li key={rider}>
              <button
                onClick={() => handleAssign(rider)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                {rider}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

