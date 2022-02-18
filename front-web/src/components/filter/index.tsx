import './styles.css';

import React from 'react';

const Filter = () => {
  return (
    <div className="filter-container base-card">
      <select className="filter-select">
        <option value="">Selecione uma cidade</option>
        <option value="">Uberaba</option>
        <option value="">Uberlândia</option>
        <option value="">Araguari</option>
        <option value="">Ituiutaba</option>
      </select>
    </div>
  );
};

export default Filter;
