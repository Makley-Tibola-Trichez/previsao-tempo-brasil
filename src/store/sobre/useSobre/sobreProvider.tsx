import * as React from "react";
import SobreType from "../sobreSlice.types";
import SobreContext from "./sobreContext";

type SobreProviderType = {
  children: JSX.Element;
};

const SobreProvider: React.FC<SobreProviderType> = ({ children }) => {
  const _contextSobre: SobreType = {} as SobreType;

  return (
    <SobreContext.Provider value={_contextSobre}>
      {children}
    </SobreContext.Provider>
  );
};

export default SobreProvider;
