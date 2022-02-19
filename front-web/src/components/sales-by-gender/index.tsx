import PieChart from 'components/pie-chart-card';
import { useEffect, useState } from 'react';
import { SalesByGenderType } from 'types/types';
import { sumSalesByByGender } from './helpers';
import { makeRequest } from 'utils/request';
import { formatPrice } from '../../utils/formatters';

import './styles.css';

const SalesByGender = () => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest.get<SalesByGenderType[]>('/sales/by-gender').then((response) => {
      console.log(response.data);
      const newTotalSum = sumSalesByByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, []);

  return (
    <div className="sales-by-gender-main-container base-card">
      <div className="sales-by-gender-quantity">
        <h2 className="sales-by-gender-quantity-title">{formatPrice(totalSum)}</h2>
        <span className="sales-by-gender-quantity-label">Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <PieChart name="" labels={['Masculino', 'Feminino', 'Outro']} series={[20, 30, 50]} />
      </div>
    </div>
  );
};

export default SalesByGender;
