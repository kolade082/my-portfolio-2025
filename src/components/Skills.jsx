import React, { useState } from 'react';
import skillsData from '../data/skillsData';
import './skills.css';
import SkillItem from './SkillItem';
import SectionTitle from './SectionTitle';

function Skills() {
  const [skills] = useState(skillsData);

  // Group skills by category
  const categories = {
    'Languages': skills.filter(skill => 
      ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'HTML', 'CSS'].includes(skill.name)
    ),
    'Frameworks & Libraries': skills.filter(skill => 
      ['React', 'Angular', 'Node.js'].includes(skill.name)
    ),
    'Databases & Tools': skills.filter(skill => 
      ['MySQL', 'Docker', 'Git', 'GitHub'].includes(skill.name)
    ),
    'Development Tools': skills.filter(skill => 
      ['VS Code', 'IntelliJ IDEA', 'Android Studio'].includes(skill.name)
    )
  };

  return (
    <div className="skills container">
      <SectionTitle title="Skills" subtitle="My Technical Skills" />
      
      <div className="skills-content">
        {Object.entries(categories).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {categorySkills.map(skill => (
                <SkillItem key={skill._id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
