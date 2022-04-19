import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import { View } from "react-native";

import Container from "../../components/container/container";
import styles from "./previsaoTempo.styles";
import Text from "../../components/text/text";
import useCidadesEstados from "../../store/cidades/useCidadesEstados/useCidadesEstados";

const PrevisaoTempo: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [estado, setEstado] = React.useState<string | null>();

  const { estados } = useCidadesEstados();

  React.useEffect(() => {
    console.log(estados);
  }, [estados]);

  return (
    <Container>
      <>
        <Text type="title" style={styles.header}>
          Previsão do Tempo
        </Text>
        {/* <Picker
          placeholder="Selecione o estado"
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="" value="" />
          <Picker.Item label="Marau" value="" />
          <Picker.Item label="Passo fundo" value="" />
          <Picker.Item label="Carazinho" value="" />
          <Picker.Item label="Erechim" value="" />
          <Picker.Item label="Soledade" value="" />
        </Picker> */}
      </>
    </Container>
  );
};

export default React.memo(PrevisaoTempo);
