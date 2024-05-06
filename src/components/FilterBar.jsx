// FilterBar.js
import React from 'react';

export default function FilterBar({ classes, toggleFilter }) {
  return (
    <div>
      {classes.map((cls) => (
        <label key={cls}>
          <input type='checkbox' onChange={() => toggleFilter(cls)} />
          {cls}
        </label>
      ))}
    </div>
  );
}
