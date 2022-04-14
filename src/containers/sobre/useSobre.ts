import * as React from "react";
import { Linking } from "react-native";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import sobreActions from "../../store/sobre/sobre.actions";

function useSobre() {
  const _dispatch = useDispatch();

  const { isLoading, sobre } = useTypedSelector(({ App, Sobre }) => ({
    isLoading: App.isLoading,
    sobre: Sobre.sobre,
  }));

  React.useLayoutEffect(() => {
    _dispatch(sobreActions.getSobre());
  }, []);

  const abrirPerfilGithub = React.useCallback((url: string) => {
    Linking.openURL(url);
  }, []);

  return { isLoading, sobre, abrirPerfilGithub };
}

export default useSobre;
