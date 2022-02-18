import Select from 'react-select';

import './styles.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Filter = () => {
  return (
    <div className="filter-container base-card">
      <Select
        classNamePrefix="filter-select"
        options={options}
        placeholder="Selecione a cidade"
        isClearable
      />
    </div>
  );
};

export default Filter;
