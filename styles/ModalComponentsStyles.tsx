import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  containerInputData: {
    gap: 10,
    flexDirection: "column",
  },
  containerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    fontSize: 16,
    width: "90%",
  },
});
