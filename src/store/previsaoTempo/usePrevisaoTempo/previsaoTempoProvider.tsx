import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import previsaoTempoActions from "../previsaoTempo.actions";
import PrevisaoTempoContext from "./previsaoTempoContext";

const PrevisaoTempoProvider: React.FC = ({ children }) => {
  const [_geocode, setGeocode] = React.useState<number | null>(null);
  const _dispatchRedux = useDispatch();

  React.useLayoutEffect(() => {
    console.log(_geocode);
    if (_geocode) {
      _dispatchRedux(previsaoTempoActions.getPrevisaoTempo(_geocode));
    }
  }, [_geocode]);

  const previsao = useTypedSelector(
    ({ PrevisaoTempo }) => PrevisaoTempo.previsao
  );

  const _context = {
    setGeocode,
    previsao,
  };
  return (
    <PrevisaoTempoContext.Provider value={_context}>
      {children}
    </PrevisaoTempoContext.Provider>
  );
};

export default PrevisaoTempoProvider;
