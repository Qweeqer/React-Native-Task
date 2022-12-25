import { TouchableOpacity } from "react-native";
import { GoBackIcon } from "./icons";

export const BackArrowHeader = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 20,
      }}
      onPress={() => navigation.goBack()}
    >
      <GoBackIcon />
    </TouchableOpacity>
  );
};
