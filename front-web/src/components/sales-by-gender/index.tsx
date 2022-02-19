import PieChart from 'components/pie-chart-card';

import './styles.css';

const SalesByGender = () => {
  return (
    <div className="sales-by-gender-main-container base-card">
      <div className="sales-by-gender-quantity">
        <h2 className="sales-by-gender-quantity-title">R$ 746.484,00</h2>
        <span className="sales-by-gender-quantity-label">Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <PieChart name="" labels={['Masculino', 'Feminino', 'Outro']} series={[20, 30, 50]} />
      </div>
    </div>
  );
};

export default SalesByGender;
