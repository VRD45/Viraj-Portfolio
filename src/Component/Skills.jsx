import "../Style/Skills.css";

export const Skills = () => {
  const skills = [
    {
      category: "Web Development",
      relatedSkills:["HTML","CSS","Javascript","React js","Django","Node js"]
    },
    {
      category: "ServiceNow",
      relatedSkills:["ITSM","Integration","Event Management","Virtual Agent","Discovery","Service Portal"]
    },
    {
      category: "Game Development",
      relatedSkills:["Unity", "C#"]
    },
    {
      category: "Other",
      relatedSkills:["Python","SQL","MongoDB","C++","Java","React Native"]
    },
  ]
  return (
    <div id="skills">
        <h1 className="heading">Skills</h1>
        <div className="container">
        {
          skills && skills.map((skill)=>(
              <div className="block">
                <h2 className="title">{skill.category}</h2>
                <div className="skillList">
                  {skill.relatedSkills && skill.relatedSkills.map((val)=>(<h4>{val}</h4>))}
                </div>
              </div>
          ))
        }
        </div>
    </div>
  )
}