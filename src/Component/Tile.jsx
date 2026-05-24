import "../Style/Tile.css";
import { FaLinkedin,FaGithub, FaInstagram, FaFacebook, FaRegCopyright    } from "react-icons/fa";
export const Tile = ({handleNavigate}) => {
  return (
    <div id="tile">
        <h1 onClick={(e) => handleNavigate(e, "home")}>Viraj Dharmameher</h1>
        <div className="social">
            <a href="https://www.linkedin.com/in/viraj-dharmameher" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/VRD45" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/vrd_45" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/viraj.dharmameher.3" target="_blank" rel="noreferrer"><FaFacebook /></a>
        </div>
        <h4><FaRegCopyright /> 2026 Viraj Dharmameher. All rights reserved.</h4>
    </div>
  )
}