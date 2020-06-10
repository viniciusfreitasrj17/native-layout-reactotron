import Reactotron, { overlay } from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "192.168.100.5" })
    .useReactNative()
    .use(overlay())
    .connect();

  tron.clear();

  console.tron = tron;
}
