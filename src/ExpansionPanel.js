import React, { useState } from 'react';

const ExpansionPanel = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expansion-panel ${expanded ? 'expanded' : ''}`}>
      <div className="panel-header" onClick={toggleExpanded}>
        <h3>{title}</h3>
        <span className="arrow">{expanded ? '+' : '+'}</span>
      </div>
      {expanded && <div className="panel-content">{content}</div>}
    </div>
  );
};

export default ExpansionPanel;