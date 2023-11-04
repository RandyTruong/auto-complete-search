import { Address, Company, User } from "../../types/user";

const geo = {
  lat: "0",
  lng: "0",
};

const address: Address = {
  geo,
  street: "1211 Avenue of the Americas",
  suite: "123",
  city: "New York",
  zipcode: "10036",
};

const company: Company = {
  name: "company",
  catchPhrase: "catch phrase!",
  bs: "something",
};

export const mockUser: User = {
  company,
  address,
  id: 0,
  email: "test@test.com",
  name: "Mr. James Von Doe III",
  phone: "(254)954-1289",
  username: "test",
  website: "test.com",
};
