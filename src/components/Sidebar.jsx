import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
    { name: "Users", path: "/users"},
    { name: "Reports", path: "/reports"},
    { name: "Information", path:"/info"}
  ];

  return (
    <div className="bg-dark text-white vh-100 p-4" style={{ width: "240px" }}>
      
      <h2 className="mb-4 text-center">⚡️DashPro</h2>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li className="nav-item mb-2" key={link.name}>
            <Link
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : "text-white"
              }`}
              aria-current="page"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
