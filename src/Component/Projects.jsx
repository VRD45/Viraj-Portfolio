// import { useRef, useState } from "react"
import "../Style/Projects.css"
export const Projects = () => {
  // const dialogRef = useRef(null);
  // const[openProjects, setOpenProjects] = useState(false);
  const projects = [
    {
      "title": "Rock-Paper-Scissor Game",
      "url": "https://vrd45.github.io/Rock-Paper-Scissor/",
      "github": "https://github.com/VRD45/Rock-Paper-Scissor",
      "skills": "HTML, CSS, Javascript"
    },
     {
      "title": "Royal Cafe",
      "url": "https://vrd45.github.io/Cafe-Profile/",
      "github": "https://github.com/VRD45/Cafe-Profile",
      "skills": "HTML, CSS"
    },
     {
      "title": "Fitness Arena",
      "url": "https://vrd45.github.io/Gym/",
      "github": "https://github.com/VRD45/Gym",
      "skills": "HTML, CSS"
    },
    {
      "title": "Glass Calculator",
      "url": "https://vrd45.github.io/Glass-Calculator/",
      "github": "https://github.com/VRD45/Glass-Calculator",
      "skills": "HTML, CSS, Javascript"
    },
     {
      "title": "Smoke Text",
      "url": "https://vrd45.github.io/Smoke-Text/",
      "github": "https://github.com/VRD45/Smoke-Text",
      "skills": "HTML, CSS, Javascript"
    },
     {
      "title": "Parallax Water Wave Effect",
      "url": "https://vrd45.github.io/Parallax-Wave-Effect/",
      "github": "https://github.com/VRD45/Parallax-Wave-Effect",
      "skills": "HTML, CSS"
    },
    {
      "title": "Valo Agents",
      "url": "https://vrd45.github.io/Valorant-Agents-Profile/",
      "github": "https://github.com/VRD45/Valorant-Agents-Profile",
      "skills": "HTML, CSS, Javascript"
    },
     {
      "title": "Live Weather App",
      "url": " https://vrd45.github.io/Live-Weather-App/",
      "github": "https://github.com/VRD45/Live-Weather-App",
      "skills": "React JS, API"
    },
     {
      "title": "Tic-Tac-Toe",
      // "url": "https://vrd45.github.io/Parallax-Wave-Effect/",
      "github": "https://github.com/VRD45/Tic-TAc-Toe",
      "skills": "React JS"
    },
  ]

  const openURL = (url) =>{
    window.open(url,"_blank");
  }
  return (
    <div id="projects">
        <h1 className="heading">Projects</h1>
        {/* <div className="card">
          <h3>Click on View Project to open the list of my projects!!!</h3>
          <button className="view" onClick={() => dialogRef.current?.showModal()}>View Project</button>
        </div> */}
        <div  className="container">
          {/* <button onClick={() => dialogRef.current?.close()}>Close</button> */}
          {
            projects && projects.map((project)=>(
              <div className="block">
                <iframe title={project.title} src={project.url} frameborder="0" scrolling="no" sandbox="allow-scripts"></iframe>
                <h3>{project.title}</h3>
                <h5>{project.skills}</h5>
                <div className="buttons">
                  {project.url && <button className="resume" onClick={() => openURL(project.url)}>View</button>}
                  <button className="contact" onClick={() => openURL(project.github)}>Github</button>
              </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}