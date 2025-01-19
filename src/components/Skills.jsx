import React, { useState } from 'react';
import skillsData from '../data/skillsData';
import './skills.css';
import SkillItem from './SkillItem';

function Skill() {
  const [skills, setSkills] = useState(skillsData);

  return (
    <div className="skills container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="row">
        {skills.map(skill => (
          <SkillItem key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
