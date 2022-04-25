import { Card } from "@rneui/themed";
import * as React from "react";
import { Image, ScrollView, View } from "react-native";
import type { DadosPrevisaoTempo } from "../../../api/api.types";
import Text from "../../../components/text/text";
import styles from "./cardPrevisaotempo.styles";
import {
  CardPrevisaoTempoProps,
  PrevisaoTempoEntrie,
} from "./cardPrevisaoTempo.types";
import PrevisaoPrincipal from "./previsaoPrincipal/previsaoPrincipal";

const CardPrevisaoTempo: React.FC<CardPrevisaoTempoProps> = ({ previsao }) => {
  const [outras, _setOutras] = React.useState<any | null>(null);
  const [principais, _setPrincipais] = React.useState<any | null>(null);

  React.useEffect(() => {
    if (previsao) {
      const _previsoes = Object.entries(Object.entries(previsao)[0][1]);
      _setPrincipais(_previsoes.slice(0, 2));
      _setOutras(_previsoes.slice(2));
    }
  }, [previsao]);

  return (
    <ScrollView style={styles.scroll}>
      <PrevisaoPrincipal previsoes={principais} />

      {outras?.map(
        (item: PrevisaoTempoEntrie<DadosPrevisaoTempo>, index: number) => {
          return (
            <Card key={index} containerStyle={styles.container}>
              <View style={styles.titleRow}>
                <Text type="title">{item[0]}</Text>
                <Image style={styles.image} source={{ uri: item[1].icone }} />
              </View>
              <Text>Máxima: {item[1].temp_max}°C</Text>
              <Text>Mínima: {item[1].temp_min}°C</Text>
              <Text>{"\n"}</Text>
              <Text type="bold">Resumo: </Text>
              <Text>{item[1].resumo}</Text>
            </Card>
          );
        }
      )}
    </ScrollView>
  );
};

export default CardPrevisaoTempo;
