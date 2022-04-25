import { Card, Divider } from "@rneui/themed";
import * as React from "react";
import { Image, View } from "react-native";
import { DadosPrevisaoTempo } from "../../../../api/api.types";
import Text from "../../../../components/text/text";
import styles from "../cardPrevisaotempo.styles";
import { PrevisaoTempoEntrie } from "../cardPrevisaoTempo.types";

type PrevisaoPrincipalProps = {
  previsoes: PrevisaoTempoEntrie[] | null;
};

const PrevisaoPrincipal: React.FC<PrevisaoPrincipalProps> = ({ previsoes }) => (
  <View>
    {previsoes?.map((item: PrevisaoTempoEntrie, index) => {
      return (
        <Card containerStyle={styles.container} key={index}>
          {Object.entries(item[1]).map(
            (turno: PrevisaoTempoEntrie<DadosPrevisaoTempo>, index) => {
              return (
                <View key={index}>
                  <View style={styles.titleRow}>
                    <Text type="title">
                      {item[0]} - {turno[0]}
                    </Text>

                    <Image
                      style={styles.image}
                      source={{ uri: turno[1].icone }}
                    />
                  </View>
                  <Text>Máxima: {turno[1].temp_max}°C</Text>
                  <Text>Minima: {turno[1].temp_min}°C</Text>
                  <Text>{"\n"}</Text>
                  <Text type="bold">Resumo:</Text>
                  <Text>{turno[1].resumo} </Text>
                  <Divider style={{ width: "100%", height: 2, marginTop: 8 }} />
                </View>
              );
            }
          )}
        </Card>
      );
    })}
  </View>
);

export default PrevisaoPrincipal;
