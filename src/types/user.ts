type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
};

export type DisplayUser = User & {
  label: string;
};
