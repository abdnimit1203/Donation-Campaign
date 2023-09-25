import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="navbar bg-transparent lg:px-[140px] md:px-[70px] py-4 md:py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52 space-y-4 text-base font-bold"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " active text-primary  underline underline-offset-4  "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " active text-primary  underline underline-offset-4  "
                    : ""
                }
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " active text-primary  underline underline-offset-4  "
                    : ""
                }
              >
                Statistics
              </NavLink>
            </ul>
          </div>
          <Link to={"/"}>
            <img src="/Logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8 text-lg font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " active text-primary  underline underline-offset-4 "
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " active text-primary  underline underline-offset-4  "
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " active text-primary  underline underline-offset-4  "
                  : ""
              }
            >
              Statistics
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
