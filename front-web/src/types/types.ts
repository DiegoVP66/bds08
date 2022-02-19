export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  gender?: Gender;
};

export type Store = {
  id: number;
  name: string;
};

export type SalesByGenderType = {
  gender: Gender;
  sum: number;
};
