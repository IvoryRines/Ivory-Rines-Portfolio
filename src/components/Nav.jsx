import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ir-star.svg";

const NavBar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0c4a6e] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          to="/"
          className="p-2 flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} alt="developer-logo" className="h-14" />
          <span className="text-[#ffe4e6] self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#ffe4e6] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium font-italiano flex flex-col p-2 md:p-0 mt-4 bg-[#0c4a6e] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 text-[#ffe4e6] rounded hover:text-[#fecdd3] md:hover:bg-transparent md:border-0 md:hover:text-[#fecdd3] md:p-0 dark:text-[#ffe4e6] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#fecdd3] md:dark:hover:bg-transparent ${
                  pathname === "/" ? "text-[#eab300]" : ""
                }`}
                aria-current="page"
                onClick={closeMenu}
              >
                AboutMe
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                className={`block py-2 px-3 text-[#ffe4e6] rounded hover:text-[#fecdd3] md:hover:bg-transparent md:border-0 md:hover:text-[#fecdd3] md:p-0 dark:text-[#ffe4e6] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#fecdd3] md:dark:hover:bg-transparent ${
                  pathname === "/Portfolio" ? "text-[#eab300]" : ""
                }`}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/Resume"
                className={`block py-2 px-3 text-[#ffe4e6] rounded hover:text-[#fecdd3] md:hover:bg-transparent md:border-0 md:hover:text-[#fecdd3] md:p-0 dark:text-[#ffe4e6] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#fecdd3] md:dark:hover:bg-transparent ${
                  pathname === "/Resume" ? "text-[#eab300]" : ""
                }`}
                onClick={closeMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`block py-2 px-3 text-[#ffe4e6] rounded hover:text-[#fecdd3] md:hover:bg-transparent md:border-0 md:hover:text-[#fecdd3] md:p-0 dark:text-[#ffe4e6] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#fecdd3] md:dark:hover:bg-transparent ${
                  pathname === "/Contact" ? "text-[#eab300]" : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//ms-auto justify to the right. can be on individual li or a tag surrounding all of them

// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/ir-star.svg";

// function NavBar() {
//   const currentPage = useLocation().pathname;

//   return (
//     <nav className="w-100 h-50" style={{ background: "white", height: "4rem" }}>
//       <ul
//         className="nav nav-tabs"
//         style={{ listStyle: "none", borderRadius: "1" }}
//       >
//         <li className="nav-item p-2 mx-2">
//           <Link
//             to="/"
//             // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//             // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//             className={currentPage === "/" ? "nav-link active" : "nav-link"}
//           >
//             <h1>IR</h1>
//           </Link>
//         </li>
//         <li className="nav-item p-2 mx-2 ms-auto">
//           <Link
//             to="/"
//             // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//             // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//             className={currentPage === "/" ? "nav-link active" : "nav-link"}
//           >
//             AboutMe
//           </Link>
//         </li>
//         <li className="nav-item p-2 mx-2">
//           <Link
//             to="/Portfolio"
//             // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={
//               currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
//             }
//           >
//             Portfolio
//           </Link>
//         </li>
//         <li className="nav-item p-2 mx-2">
//           <Link
//             to="/Resume"
//             // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={
//               currentPage === "/Resume" ? "nav-link active" : "nav-link"
//             }
//           >
//             Resume
//           </Link>
//         </li>
//         <li className="nav-item p-2 mx-2">
//           <Link
//             to="/Contact"
//             // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={
//               currentPage === "/Contact" ? "nav-link active" : "nav-link"
//             }
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
