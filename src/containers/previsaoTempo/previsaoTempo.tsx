import * as React from "react";

import Container from "../../components/container/container";
import styles from "./previsaoTempo.styles";
import Text from "../../components/text/text";
import OpcoesEstados from "./opcoesEstados/opcoesEstados";
import OpcoesCidades from "./opcoesCidades/opcoesCidades";
import CardPrevisaoTempo from "./cardPrevisaoTempo/cardPrevisaoTempo";
import usePrevisaoTempo from "../../store/previsaoTempo/usePrevisaoTempo/usePrevisaoTempo";

const PrevisaoTempo: React.FC = () => {
  const [estado, setEstado] = React.useState<number | string>("0");
  const [cidade, setCidade] = React.useState<number | string>("0");
  const { previsao, setGeocode } = usePrevisaoTempo();

  React.useEffect(() => {
    if (cidade) {
      setGeocode(Number(cidade));
    }
  }, [cidade]);

  return (
    <Container>
      <>
        <Text type="title" style={styles.header}>
          Previsão do Tempo
        </Text>
        <OpcoesEstados estado={estado} setEstado={setEstado} />
        <OpcoesCidades cidade={cidade} setCidade={setCidade} estado={estado} />
        <CardPrevisaoTempo previsao={previsao} />
      </>
    </Container>
  );
};

export default React.memo(PrevisaoTempo);
