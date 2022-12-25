import { Text, Button } from "react-native";
const MapScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("MapScreen");
  };
  return <Text>MapScren</Text>;
};
export default MapScreen;
