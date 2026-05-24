import "../Style/Navbar.css"
import { FaHome, FaBriefcase, FaListAlt   } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GoProject } from "react-icons/go";
import { MdEmail } from "react-icons/md";
export const Navbar = ({handleNavigate}) => {

//   const handleNavigate = (e, id) => {
//   e.preventDefault();
//   const element = document.getElementById(id);
//   if (element) {
//     // Scroll smoothly
//     element.scrollIntoView({ behavior: 'smooth' });
//     // Update URL hash without jumping
//     window.history.pushState(null, null, `#${id}`);
//   }
// };
  return (
    <ul id="navbar">
        <a href="/#home" onClick={(e) => handleNavigate(e, "home")} data-tooltip = "Home"><FaHome /></a>
        <a href="/#about" onClick={(e) => handleNavigate(e, "about")} data-tooltip = "About"><RxAvatar /></a>
        <a href="/#exp" onClick={(e) => handleNavigate(e, "exp")} data-tooltip = "Experience"><FaBriefcase /></a>
        <a href="#skills" onClick={(e) => handleNavigate(e, "skills")} data-tooltip = "Skills"><FaListAlt /></a>
        <a href="/#projects" onClick={(e) => handleNavigate(e, "projects")} data-tooltip = "Projects"><GoProject /></a>
        <a href="/#contact" onClick={(e) => handleNavigate(e, "contact")} data-tooltip = "Contact"><MdEmail /></a>
    </ul>
  )
}