import { Text, Button } from "react-native";
const CreatePostsScreen = ({ navigation }) => {
  const onExitBtnPress = () => {
    navigation.navigate("CreatePostsScreen");
  };
  return <Text>CreatePostsScreen</Text>;
};
export default CreatePostsScreen;
