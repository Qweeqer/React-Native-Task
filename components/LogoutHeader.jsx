import { TouchableOpacity } from "react-native";
import { LogoutIcon } from "./icons";

export const LogoutHeader = () => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 20,
      }}
      onPress={() => {
        console.log("logout");
      }}
    >
      <LogoutIcon />
    </TouchableOpacity>
  );
};
