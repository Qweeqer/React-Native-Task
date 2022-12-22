import { Text, View, StyleSheet } from "react-native";
const Button = () => {
  return (
    <View style={st.btnCont}>
      <Text style={st.buttonText}>+</Text>
    </View>
  );
};

const st = StyleSheet.create({
  btnCont: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "100",
  },
});

export default Button;
