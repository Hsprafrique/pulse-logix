// src/components/Shared/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-6 fixed">
      <h1 className="text-2xl font-bold text-green-400">🚚 Pulse Logix</h1>

      <nav className="flex flex-col gap-4 mt-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/merchant"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "text-gray-300 hover:text-white"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/rider"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "text-gray-300 hover:text-white"
          }
        >
          Riders
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : "text-gray-300 hover:text-white"
          }
        >
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

