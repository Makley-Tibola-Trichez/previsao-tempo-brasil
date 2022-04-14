import * as React from "react";
import { Card as RCard } from "@rneui/themed";
import { StyleSheet } from "react-native";

type CardType = unknown;

const Card: React.FC<CardType> = ({ children }) => {
  return <RCard containerStyle={style.card}>{children}</RCard>;
};

const style = StyleSheet.create({
  card: {
    borderRadius: 28,
    marginBottom: 16,
  },
});

export default Card;
