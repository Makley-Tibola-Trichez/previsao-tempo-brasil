export type CidadeType = {
  label: string;
  geocode: number;
};

type CidadesType = {
  cidades: CidadeType[];
};

export type CidadeContextType = CidadesType & {
  setGeocode: React.Dispatch<React.SetStateAction<number | null>>;
};

export default CidadesType;
