export type Address = {
  street: string;
  town: string;
  county: string;
  postcode: string;
};

export type User = {
  id: string;
  first_name: string;
  other_names: string;
  address: Address;
  mobile: string;
  email: string;
  company: string;
  password: string;
  preferences: {
    contact: string[];
  };
};
