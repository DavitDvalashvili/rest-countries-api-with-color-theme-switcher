export type country = {
  id: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  alpha3Code: string;
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  flag: string;
  borders: [string];
  mapLink: string;
};

type InitialState = {
  loading: boolean;
  countries: country[];
  error: string;
  region: string;
  limit: number;
  searchTerm: string;
};

export default InitialState;

export type countryCardProps = {
  index: number;
};
