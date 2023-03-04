import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types"


const Skills = (props : SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 2000)
    },[])
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
        {
            isLoggedIn ? 
            <button>see data</button>
            :
            <button onClick={() => setIsLoggedIn(true)}>log in </button>
        }
    </div>
  )
}

export default Skills