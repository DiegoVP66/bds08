export type Gender = {
  name: 'MALE' | 'FEMALE' | 'OTHER';
};

export type FilterData = {
  gender?: Gender;
};

export type Store = {
  id: number;
  name: string;
};
