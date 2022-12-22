import { Text, Button } from "react-native";
const CommentsScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("CommentsScreen");
  };
  return <Text>CommentsScreen</Text>;
};
export default CommentsScreen;
