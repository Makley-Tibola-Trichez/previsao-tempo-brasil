import * as React from "react";
import { NavigationContext } from "@react-navigation/native";

const useNavigate = () => {
  const navigation = React.useContext(NavigationContext);

  const navigate = React.useCallback(
    (route: string) => {
      navigation?.navigate(route);
    },
    [navigation]
  );

  return {
    navigate,
  };
};

export default useNavigate;
