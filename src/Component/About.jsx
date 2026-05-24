import "../Style/About.css";
import profile from "../Assets/profile.png"

export const About = () => {
  return (
    <div id="about">
        <h1 className="heading">About</h1>
        <div className="aboutGroup">
            <div className="intro">
                <div className="backAbout"></div>
                <img className="frontAbout" src={profile} alt="Viraj"/>
            </div>
            <div className="intro">
                ServiceNow Developer with 3.8 years of experience delivering ITSM and Event Management solutions in enterprise environments. Expertise in designing and optimizing Incident/Problem/Change/Request workflows, building Service Catalog automations, and developing scalable platform customizations using JavaScript, Glide APIs, Business Rules, Client Scripts, and UI Policies. Proven ability to integrate ServiceNow with third-party systems via REST/SOAP APIs, implement event-driven automation (Event/Alert rules, subflows), and enhance self-service through Virtual Agent. Known for improving operational efficiency and SLA performance through robust reporting/dashboards, proactive notifications (including MS Teams), and disciplined delivery in Agile/ITIL-driven teams.
            </div>
        </div>
    </div>
  )
}