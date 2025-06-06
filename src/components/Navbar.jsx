// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/merchant" },
    { name: "Riders", path: "/rider" },
    { name: "Orders", path: "/merchant#orders" }, // We'll scroll to orders section
  ];

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-lg font-bold">🚚 Pulse Logix</h1>
      <div className="space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-yellow-400 ${
              pathname === item.path ? "text-yellow-400" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

