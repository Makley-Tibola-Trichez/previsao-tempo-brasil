import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import useCidades from "../../../store/cidades/useCidades/useCidades";
import { OpcoesCidadesProps } from "./opcoesCidades.types";

const OpcoesCidades: React.FC<OpcoesCidadesProps> = ({
  cidade,
  setCidade,
  estado,
}) => {
  const { cidades, setGeocode } = useCidades();

  React.useEffect(() => {
    setGeocode(Number(estado));
  }, [estado]);

  return (
    <>
      {cidades.length > 0 && (
        <Picker
          placeholder="Selecione a cidade"
          selectedValue={cidade}
          style={{ height: 50, width: 250 }}
          onValueChange={(itemValue) => setCidade(Number(itemValue))}
        >
          <Picker.Item label="Selecione uma cidades" value="" enabled={false} />
          {cidades.map((cidade, index) => (
            <Picker.Item
              label={cidade.label}
              value={cidade.geocode}
              key={index}
            />
          ))}
        </Picker>
      )}
    </>
  );
};

export default OpcoesCidades;
