import { NavLink } from "react-router-dom";

const links = [
  { name: "Marketplace", path: "/marketplace" },
  { name: "Community", path: "/community" },
  { name: "My Collection", path: "/collection" },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">
          Collector's Hub
        </h1>

        <div className="flex gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;