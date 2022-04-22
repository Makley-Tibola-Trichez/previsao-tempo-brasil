import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import cidadesActions from "../estados.actions";
import EstadosContext from "./estadosContext";

const EstadosProvider: React.FC = ({ children }) => {
  const _dispatchRedux = useDispatch();

  React.useLayoutEffect(() => {
    _dispatchRedux(cidadesActions.getEstados());
  }, []);

  const estados = useTypedSelector(({ Estados }) => Estados.estados);

  const _context = {
    estados,
  };

  return (
    <EstadosContext.Provider value={_context}>
      {children}
    </EstadosContext.Provider>
  );
};

export default EstadosProvider;
