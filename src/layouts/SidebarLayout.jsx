// src/layouts/SidebarLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col items-center py-8">
        <div className="text-2xl font-bold mb-12">MyLogo</div>
        <nav className="flex flex-col space-y-4 w-full px-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `py-2 px-4 rounded text-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-4 rounded text-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            📄 About
          </NavLink>

          <NavLink
            to="/student-form"
            className={({ isActive }) =>
              `py-2 px-4 rounded text-lg hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            🎓 Student Form
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
