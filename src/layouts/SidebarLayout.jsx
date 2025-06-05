import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserPlus, faChartPie, faDatabase } from "@fortawesome/free-solid-svg-icons";


export default function SidebarLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-[#F6F7FB] text-[#2B286D] flex flex-col py-8">

        <NavLink to="/" className="flex flex-col items-center justify-center px-4 text-center">
          <img src="/logo.png" alt="AREC-logo" className="h-10 w-auto" />
          <h2 className="text-xl font-bold text-[#2B286D]">A.R. Education Consultancy</h2>
          <p className="text-xs text-[#2B286D] italic mt-1">Get ready to take off with us!</p>
        </NavLink>

        <div className="flex-grow flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center space-y-4 w-full px-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 px-4 rounded text-lg hover:text-[#F6F7FD] hover:bg-[#3C39A1] transition ${
                  isActive ? "bg-[#2B286D] text-[#F6F7FD]" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink
              to="/university-counsellor-registration"
              className={({ isActive }) =>
                `py-2 px-4 rounded text-lg hover:text-[#F6F7FD] hover:bg-[#3C39A1] transition ${
                  isActive ? "bg-[#2B286D] text-[#F6F7FD]" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </NavLink>

            <NavLink
              to="/students-data"
              className={({ isActive }) =>
                `py-2 px-4 rounded text-lg hover:text-[#F6F7FD] hover:bg-[#3C39A1] transition ${
                  isActive ? "bg-[#2B286D] text-[#F6F7FD]" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faDatabase} />
            </NavLink>

            <NavLink
              to="/student-analysis"
              className={({ isActive }) =>
                `py-2 px-4 rounded text-lg hover:text-[#F6F7FD] hover:bg-[#3C39A1] transition ${
                  isActive ? "bg-[#2B286D] text-[#F6F7FD]" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faChartPie} />
            </NavLink>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
