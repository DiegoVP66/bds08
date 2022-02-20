import PieChart from 'components/pie-chart-card';
import { useEffect, useState } from 'react';
import { PieChartConfig, SalesByGenderType } from 'types/types';
import { makeRequest } from 'utils/request';
import { formatPrice } from '../../utils/formatters';
import { buildSalesByGenderChart, sumSalesByGender } from './helpers';

import './styles.css';

const SalesByGender = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest.get<SalesByGenderType[]>('/sales/by-gender').then((response) => {
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
      const newSalesByGender = buildSalesByGenderChart(response.data);
      setSalesByGender(newSalesByGender);
    });
  }, []);

  return (
    <div className="sales-by-gender-main-container base-card">
      <div className="sales-by-gender-quantity">
        <h2 className="sales-by-gender-quantity-title">{formatPrice(totalSum)}</h2>
        <span className="sales-by-gender-quantity-label">Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <PieChart name="" labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
};

export default SalesByGender;
