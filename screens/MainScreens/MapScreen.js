import { Text, Button } from "react-native";
const MapScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("LMapScreen");
  };
  return <Text>MapScren</Text>;
};
export default MapScreen;
