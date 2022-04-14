import { Button } from "@rneui/themed";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Container from "../../components/container/container";
import useNavigate from "../../hooks/useNavite";

type MenuType = unknown;

const Menu: React.FC<MenuType> = () => {
  const { navigate } = useNavigate();

  const handleNavigate = React.useCallback((route: string) => {
    navigate(route);
  }, []);

  return (
    <Container>
      <View style={styles.spacing}>
        <Button
          title="Previsão do Tempo"
          onPress={() => handleNavigate("PrevisaoTempo")}
        />
        <Button title="Sobre" onPress={() => handleNavigate("Sobre")} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  spacing: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Menu;
