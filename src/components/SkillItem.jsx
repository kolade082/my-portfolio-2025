import React from 'react';

function SkillItem({ skill }) {
  return (
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className={skill.icon} style={{ color: skill.color }}></i>
        <h3>{skill.name}</h3>
      </div>
    </div>
  );
}

export default SkillItem;
