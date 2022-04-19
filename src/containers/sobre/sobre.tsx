import { LinearProgress, Skeleton, Divider } from "@rneui/themed";
import * as React from "react";
import { View } from "react-native";
import AvatarCircle from "../../components/avatarCircle/avatarCircle";
import Card from "../../components/card/card";
import Row from "../../components/row/row";
import Text from "../../components/text/text";
import colorPalette from "../../config/colorPalette/colorPalette";
import SobreType from "../../store/sobre/sobreSlice.types";
import styles from "./sobre.styles";
import useSobre from "./useSobre";

const Sobre: React.FC = () => {
  const { sobre, isLoading, abrirPerfilGithub } = useSobre();

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <Card>
          <AvatarCircle avatarUrl={sobre.avatar_url} />
          <View style={styles.bodyContent}>
            <Text
              type="bold"
              style={styles.link}
              onPress={() => abrirPerfilGithub(sobre.html_url)}
            >
              Meu Github
            </Text>
          </View>
          <Divider
            color={colorPalette.redderPink}
            width={1}
            style={styles.divider}
          />
          <Row>
            <Text type="bold">RA: </Text>
            <Text>1120452</Text>
          </Row>
          <Row>
            <Text type="bold">Nome: </Text>
            <Text>{sobre.name}</Text>
          </Row>
          <Row>
            {sobre.email && (
              <Text type="bold">
                Email: <Text>{sobre.email}</Text>
              </Text>
            )}
          </Row>
          <Row>
            <Text type="bold">Cargo: </Text>
            <Text>Front-end Developer</Text>
          </Row>
        </Card>
      ) : (
        <LinearProgress />
      )}
    </View>
  );
};

export default React.memo(Sobre);
