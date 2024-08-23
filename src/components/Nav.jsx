import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ir-star.svg";

function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="w-100 bg-dark" style={{ height: "4rem" }}>
      <ul className="nav nav-tabs" style={{ listStyle: "none" }}>
        <li className="nav-item p-2 mx-2">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            <img
              src={logo}
              alt="developer-logo"
              style={{ height: "2rem", width: "auto" }}
            />
          </Link>
        </li>
        <li className="nav-item p-2 mx-2 ms-auto">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            AboutMe
          </Link>
        </li>
        <li className="nav-item p-2 mx-2">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item p-2 mx-2">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
        <li className="nav-item p-2 mx-2">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

//ms-auto justify to the right. can be on individual li or a tag surrounding all of them

// // titles: About me, Portfolio, Contact, resume

// import { Link, useLocation } from "react-router-dom";

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function Nav() {
//   const currentPage = useLocation().pathname;

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === "/" ? "nav-link active" : "nav-link"}
//         >
//           AboutMe
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Portfolio"
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
//           className={
//             currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
//           }
//         >
//           Portfolio
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Resume"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
//         >
//           Resume
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
//           className={
//             currentPage === "/Contact" ? "nav-link active" : "nav-link"
//           }
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

// export default Nav;
