import React, { memo } from 'react';

/**
 * High-Performance Memoized Module Card Component
 * Prevents redundant DOM reconciliations during high-frequency telemetry polling.
 */
const ModuleCard = memo(({ 
  badge, 
  status, 
  highlightClass = "highlight-cyan",
  title, 
  description, 
  metrics = [] 
}) => {
  return (
    <div className={`arb-card ${highlightClass}`}>
      <div className="arb-header">
        <span className="chain-badge">{badge}</span>
        <span className="status-live">{status}</span>
      </div>
      <h3>{title}</h3>
      {description && <p className="card-desc">{description}</p>}
      <div className="metrics-container">
        {metrics.map((m, idx) => (
          <div className="metric-row" key={idx}>
            <span>{m.label}:</span>
            {m.isNode ? (
              m.value
            ) : (
              <strong className={m.colorClass || ''}>{m.value}</strong>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

ModuleCard.displayName = 'ModuleCard';

export default ModuleCard;
