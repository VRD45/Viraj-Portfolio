import "../Style/Home.css";
import profile from "../Assets/profile.png";
import resume from "../Assets/Viraj Dharmameher Resume.pdf"

export const Home = ({handleNavigate}) => {
//   const handleNavigate = (e, id) => {
//   e.preventDefault();
//   const element = document.getElementById(id);
//   if (element) {
//     // Scroll smoothly
//     element.scrollIntoView({ behavior: 'smooth' });
//     // Update URL hash without jumping
//     window.history.pushState(null, null, `#${id}`);
//   }
// }
  return (
    <div id="home">
        <h2>Hello, Myself</h2>
        <h1><span>V</span>iraj <span>D</span>harmameher</h1>
        <h3>Software Engineer</h3>
        <div className="buttons">
            <a href={resume} download="Viraj_Dharmameher.pdf" className="resume">Download CV</a>
            <a href="#contact" className="contact"  onClick={(e) => handleNavigate(e, "contact")}>Contact me</a>
        </div>
        <div className="profile">
            <img src={profile} alt="Viraj" />
        </div>
    </div>
  )
}