export type EstadoResponseType = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

export type CidadeResponseType = {
  id: string;
  nome: string;
  microrregiao: {
    id: number;
    mesorregiao: {
      UF: {
        id: number;
        nome: string;
        regiao: {
          id: number;
          nome: string;
          sigla: string;
        };
        sigla: string;
      };
      id: number;
      nome: string;
    };
    nome: string;
  };
  "regiao-imediata": {
    id: number;
    nome: string;
    "regiao-intermediaria": {
      UF: {
        id: number;
        nome: string;
        regiao: {
          id: number;
          nome: string;
          sigla: string;
        };
        sigla: string;
      };
      id: number;
      nome: string;
    };
  };
};

export type PrevisaoTempoResponseType = {
  [key: string]: {
    [key: string]: {
      manha: {
        uf: string;
        entidade: string;
        resumo: string;
        tempo: string;
        temp_max: number;
        temp_min: number;
        dir_vento: string;
        int_vento: string;
        cod_icone: string;
        icone: string;
        dia_semana: string;
        umidade_max: number;
        umidade_min: number;
        temp_max_tende: string;
        cod_temp_max_tende_icone: string;
        temp_max_tende_icone: string;
        temp_min_tende: string;
        cod_temp_min_tende_icone: string;
        temp_min_tende_icone: string;
        estacao: string;
        hora: string;
        nascer: string;
        ocaso: string;
        fonte: string;
      };
      tarde: {
        uf: string;
        entidade: string;
        resumo: string;
        tempo: string;
        temp_max: number;
        temp_min: number;
        dir_vento: string;
        int_vento: string;
        cod_icone: string;
        icone: string;
        dia_semana: string;
        umidade_max: number;
        umidade_min: number;
        temp_max_tende: string;
        cod_temp_max_tende_icone: string;
        temp_max_tende_icone: string;
        temp_min_tende: string;
        cod_temp_min_tende_icone: string;
        temp_min_tende_icone: string;
        estacao: string;
        hora: string;
        nascer: string;
        ocaso: string;
        fonte: string;
      };
      noite: {
        uf: string;
        entidade: string;
        resumo: string;
        tempo: string;
        temp_max: number;
        temp_min: number;
        dir_vento: string;
        int_vento: string;
        cod_icone: string;
        icone: string;
        dia_semana: string;
        umidade_max: number;
        umidade_min: number;
        temp_max_tende: string;
        cod_temp_max_tende_icone: string;
        temp_max_tende_icone: string;
        temp_min_tende: string;
        cod_temp_min_tende_icone: string;
        temp_min_tende_icone: string;
        estacao: string;
        hora: string;
        nascer: string;
        ocaso: string;
        fonte: string;
      };
    };
  };
};
