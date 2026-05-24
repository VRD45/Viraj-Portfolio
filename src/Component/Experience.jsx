import "../Style/Experience.css";
import { FaBriefcase } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
export const Experience = () => {
  return (
    <div id="exp">
        <h1 className="heading">Experience</h1>
        <ul class="timeline">
        <li>
            <div>
            <p><FaBookOpen /> SSC: 87.40%</p>      
            <time datetime="2018-10-09">2016</time>
            </div>
        </li>
        <li>
            <div>
            <p><FaBookOpen /> HSC: 81.54%</p>      
            <time datetime="2018-10-09">2018</time>
            </div>
        </li>
        <li>
            <div>
            <p><FaBookOpen /> B.E.-IT: 9.25 CGPA</p>      
            <time datetime="2018-10-09">2018 - 2022</time>
            </div>
        </li>
        <li>
            <div>
            <p><FaBriefcase /> Accenture</p>    
            {/* <p>Infra Transformation Analyst</p>       */}
            <time datetime="2018-10-09">AUG 2022 - Current</time>
            </div>
        </li>
        </ul>
    </div>
  )
}