import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerNext: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 80,
  },
  miniTitleContainer: {
    marginLeft: 50,
  },
  miniTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    marginHorizontal: 40,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },

  imageContainerNext: {
    justifyContent: "center",
    alignSelf: "center",
    width: 150,
    height: 150,
  },

  nextButtonContainer: {
    justifyContent: "center",
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 500,
  },
});
