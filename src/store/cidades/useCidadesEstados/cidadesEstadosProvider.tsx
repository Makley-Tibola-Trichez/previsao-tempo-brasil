import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import cidadesActions from "../cidadesEstados.actions";
import type { CidadeType, EstadoType } from "../cidadesEstadosSlice.types";
import CidadesEstadosContext from "./cidadesEstadosContext";

const CidadesEstadosProvider: React.FC = ({ children }) => {
  const [cidades, _setCidades] = React.useState<CidadeType[]>([]);
  const [_estados, _setEstados] = React.useState<EstadoType[]>([]);
  const _dispatchRedux = useDispatch();

  _dispatchRedux(cidadesActions.getEstados());

  const estados = useTypedSelector(
    ({ CidadesEstados }) => CidadesEstados.estados
  );

  console.log(estados);

  React.useEffect(() => {
    _setEstados(estados);
  }, [estados]);

  const _context = {
    estados: _estados,
    cidades,
  };

  return (
    <CidadesEstadosContext.Provider value={_context}>
      {children}
    </CidadesEstadosContext.Provider>
  );
};

export default CidadesEstadosProvider;
