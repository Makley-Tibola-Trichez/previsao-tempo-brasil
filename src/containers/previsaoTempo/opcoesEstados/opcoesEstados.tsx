import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import useEstados from "../../../store/estados/useEstados/useEstados";
import { OpcoesEstadosProps } from "./opcoesEstados.types";

const OpcoesEstados: React.FC<OpcoesEstadosProps> = ({ estado, setEstado }) => {
  const { estados } = useEstados();

  return (
    <Picker
      placeholder="Selecione o estado"
      selectedValue={estado}
      style={{ height: 50, width: 250 }}
      onValueChange={(itemValue) => setEstado(Number(itemValue))}
    >
      <Picker.Item label="Selecione um estado" value="" enabled={false} />
      {estados.map((estado, index) => (
        <Picker.Item label={estado.label} value={estado.id} key={index} />
      ))}
    </Picker>
  );
};

export default OpcoesEstados;
