import { SkillsProps } from "./skills.types"


const Skills = (props : SkillsProps) => {
    const {skills} = props;
  return (
    <div>
        <h1>Skills</h1>
        <ul>
        {
            skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Skills