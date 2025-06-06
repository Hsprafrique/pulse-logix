import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShippingFast, FaUserFriends, FaChartLine } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white shadow">
        {/* LEFT: TEXT */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            🚚 Pulse Logix
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            AI-Powered Logistics for African Merchants
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Place delivery orders. Assign riders in real-time. Showcase
            innovation — no backend required.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/merchant")}
              className="px-5 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Launch Dashboard
            </button>
            <button
              onClick={() => navigate("/rider")}
              className="px-5 py-3 bg-gray-200 text-gray-800 font-medium rounded hover:bg-gray-300 transition"
            >
              See Riders
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE / ANIMATION / PLACEHOLDER */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-semibold">
            Delivery Tracking (Coming Soon) TECH-AFRIQUE
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">Why Pulse Logix?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <FaShippingFast className="text-3xl text-blue-600 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-2">Order Creation</h4>
            <p className="text-sm text-gray-600">
              Easily place delivery orders with a simple form.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <FaUserFriends className="text-3xl text-green-600 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-2">Rider Assignment</h4>
            <p className="text-sm text-gray-600">
              Assign available riders in real-time — no delays.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <FaChartLine className="text-3xl text-purple-600 mb-3 mx-auto" />
            <h4 className="font-semibold text-lg mb-2">Live Dashboard</h4>
            <p className="text-sm text-gray-600">
              Track delivery progress and rider status easily.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Pulse Logix is reimagining logistics for Africa.
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          From Mock data to real deployments — this is just the start.
        </p>
        <a
          href="https://www.linkedin.com/in/hsprafrique"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition"
        >
          View Creator on LINKEDIN 
        </a>
      </section>
    </div>
  );
}

