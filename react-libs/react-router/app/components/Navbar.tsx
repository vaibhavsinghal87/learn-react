import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50 h-10">
      <div className="md:flex px-6 py-3 justify-between items-center gap-6">
        <div className="space-x-4 text-sm text-gray-300">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
          >
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Home</span>
            )}
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
            to="/posts"
            prefetch="intent"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
            to="/about"
            prefetch="intent"
            viewTransition
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
            to="/contact"
            prefetch="render"
            state={{ page: "contact page" }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
