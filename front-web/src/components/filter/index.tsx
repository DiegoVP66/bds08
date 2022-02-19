import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Store } from 'types/types';
import { makeRequest } from 'utils/request';
import './styles.css';

const Filter = () => {
  const [store, setStore] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest
      .get('/stores')
      .then((response) => {
        setStore(response.data);
      })
      .catch((response) => {
        console.error(`Error: ${response.data}`);
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <Select
        classNamePrefix="filter-select"
        placeholder="Selecione a cidade"
        isClearable
        options={store}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
      />
    </div>
  );
};

export default Filter;
