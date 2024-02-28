import { StyleSheet } from "react-native";
import colors from "./Colors";

export const homeStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  menuIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 9,
    backgroundColor: "black",
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  img: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgWrapper: {
    borderRadius: 30,
    backgroundColor: colors.gray200,
  },
});

export const greetingStyle = StyleSheet.create({
  greeting: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "black",
  },
  span: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: colors.gray400,
    marginBottom: 20,
  },
});
