export type CidadeType = {
  label: string;
  geocode: number;
};

export type EstadoType = {
  label: string;
  id?: number;
};

type CidadesType = {
  estados: EstadoType[];
  cidades: CidadeType[];
};

export default CidadesType;
