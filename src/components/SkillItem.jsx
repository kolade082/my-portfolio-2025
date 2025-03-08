import React from 'react';

function SkillItem({ skill }) {
  return (
    <div className="skill-item">
      <div className="skill-icon">
        <i className={skill.icon} style={{ color: skill.color }}></i>
      </div>
      <div className="skill-info">
        <h3>{skill.name}</h3>
        <div className="skill-level">
          <div className="level-bar" style={{ 
            background: `linear-gradient(90deg, ${skill.color}80 0%, transparent 100%)`
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
