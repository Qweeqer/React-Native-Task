import { Text, Button } from "react-native";
const MapScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("MapScreen");
  };
  return <Text>MapScreen</Text>;
};
export default MapScreen;
