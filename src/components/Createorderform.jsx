// src/components/CreateOrderForm.jsx
import { useState } from "react";

const CreateOrderForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    packageDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({ customerName: "", address: "", packageDetails: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-3">📦 Create New Order</h2>
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        placeholder="Customer Name"
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Delivery Address"
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <input
        type="text"
        name="packageDetails"
        value={formData.packageDetails}
        onChange={handleChange}
        placeholder="Package Details"
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Create Order
      </button>
    </form>
  );
};

export default CreateOrderForm;

