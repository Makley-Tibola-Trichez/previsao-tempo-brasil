import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./containers/menu/menu";
import Sobre from "./containers/sobre/sobre";
import PrevisaoTempo from "./containers/previsaoTempo/previsaoTempo";
import SobreProvider from "./store/sobre/useSobre/sobreProvider";
import CidadesProvider from "./store/cidades/useCidades/cidadesProvider";
import EstadosProvider from "./store/estados/useEstados/estadosProvider";
import PrevisaoTempoProvider from "./store/previsaoTempo/usePrevisaoTempo/previsaoTempoProvider";
import LoaderCircle from "./components/loaderCircle/loaderCircle";
const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Sobre">
            {() => (
              <SobreProvider>
                <Sobre />
              </SobreProvider>
            )}
          </Stack.Screen>
          <Stack.Screen name="PrevisaoTempo">
            {() => (
              <EstadosProvider>
                <CidadesProvider>
                  <PrevisaoTempoProvider>
                    <PrevisaoTempo />
                  </PrevisaoTempoProvider>
                </CidadesProvider>
              </EstadosProvider>
            )}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
