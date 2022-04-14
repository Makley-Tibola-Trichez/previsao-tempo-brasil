import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./containers/menu/menu";
import Sobre from "./containers/sobre/sobre";
import PrevisaoTempo from "./containers/previsaoTempo/previsaoTempo";
import SobreProvider from "./store/sobre/useSobre/sobreProvider";

type RoutesType = unknown;

const Stack = createNativeStackNavigator();

const Routes: React.FC<RoutesType> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Sobre">
          {() => (
            <SobreProvider>
              <Sobre />
            </SobreProvider>
          )}
        </Stack.Screen>
        <Stack.Screen name="PrevisaoTempo" component={PrevisaoTempo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
