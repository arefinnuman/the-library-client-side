/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FcReading } from "react-icons/fc";
import { SiWantedly } from "react-icons/si";
import { Link } from "react-router-dom";
import FutureReading from "../components/FutureReading";
import ReadingList from "../components/ReadingList";

const Navbar = () => {
  const navBarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Explore</Link>
      </li>
      <li>
        <Link to="/add-books">Add Books</Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">The Library</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-sm btn-outline btn-accent mx-3"
          onClick={() => window.readingModal.showModal()}
        >
          <FcReading /> Reading List
        </button>

        <div
          className="mr-3 btn btn-sm btn-outline btn-primary"
          onClick={() => window.futureReading.showModal()}
        >
          <SiWantedly />
        </div>

        <Link to="/login" className="btn btn-sm btn-outline btn-primary">
          Login
        </Link>
      </div>

      <dialog id="readingModal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Reading List!</h3>
          <ReadingList />
        </form>
      </dialog>

      <dialog id="futureReading" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Plan to read for future</h3>
          <FutureReading />
        </form>
      </dialog>
    </div>
  );
};

export default Navbar;
