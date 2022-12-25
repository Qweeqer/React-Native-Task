import { Text, Button } from "react-native";
const ProfileScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("ProfileScreen");
  };
  return <Text>ProfileScreen</Text>;
};
export default ProfileScreen;
