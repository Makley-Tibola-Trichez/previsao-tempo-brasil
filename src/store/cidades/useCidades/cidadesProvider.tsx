import * as React from "react";
import { useDispatch } from "react-redux";
import Api from "../../../api/api";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import cidadesActions from "../cidades.actions";
import CidadesContext from "./cidadesContext";

const CidadesProvider: React.FC = ({ children }) => {
  const [geocode, setGeocode] = React.useState<number | null>(null);

  const _dispatchRedux = useDispatch();

  React.useLayoutEffect(() => {
    if (geocode) {
      _dispatchRedux(cidadesActions.getCidades(geocode));
    } else {
      _dispatchRedux(cidadesActions.setCidades([]));
    }
  }, [geocode]);

  const cidades = useTypedSelector(({ Cidades }) => Cidades.cidades);

  const _context = {
    cidades: cidades,
    setGeocode: setGeocode,
  };

  return (
    <CidadesContext.Provider value={_context}>
      {children}
    </CidadesContext.Provider>
  );
};

export default CidadesProvider;
