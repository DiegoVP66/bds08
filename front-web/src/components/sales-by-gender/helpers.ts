import { SalesByGenderType } from 'types/types';

export const sumSalesByByGender = (salesByGender: SalesByGenderType[] = []) => {
  return salesByGender.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
