import { Button } from "@rneui/themed";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Container from "../../components/container/container";
import useNavigate from "../../hooks/useNavite";
import styles from "./menu.styles";

type MenuType = unknown;

const Menu: React.FC<MenuType> = () => {
  const { navigate } = useNavigate();

  const handleNavigate = React.useCallback((route: string) => {
    navigate(route);
  }, []);

  return (
    <Container>
      <View style={styles.spacing}>
        <View style={styles.button}>
          <Button
            title="Previsão do Tempo"
            onPress={() => handleNavigate("PrevisaoTempo")}
          />
        </View>
        <View style={styles.button}>
          <Button title="Sobre" onPress={() => handleNavigate("Sobre")} />
        </View>
      </View>
    </Container>
  );
};

export default Menu;
