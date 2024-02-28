import { StyleSheet } from "react-native";
import colors from "./Colors";

export const offerScrollViewStyles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 17,
    marginRight: 12,
    width: 260,
    height: 160,
    alignItems: "flex-start",
    overflow: "hidden",
  },
  img: {
    borderRadius: 20,
  },
  offerDiscount: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "#000000",
  },
  offerDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#000000",
  },
  offerCode: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 11,
    color: colors.gray400,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 12,
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
