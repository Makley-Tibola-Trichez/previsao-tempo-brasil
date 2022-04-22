import * as React from "react";
import { Card, Text } from "@rneui/themed";
import { StyleSheet } from "react-native";

type CardPrevisaoTempoProps = {
  previsao: unknown;
};

const CardPrevisaoTempo: React.FC<CardPrevisaoTempoProps> = ({}) => {
  return (
    <Card containerStyle={styles.container}>
      <Text>opa</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 4,
    padding: 16,
  },
});

export default CardPrevisaoTempo;
