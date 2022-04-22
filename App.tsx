import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import LoaderCircle from "./src/components/loaderCircle/loaderCircle";
import Routes from "./src/routes";
import store from "./src/store/store";
import Spinner from "react-native-loading-spinner-overlay";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
