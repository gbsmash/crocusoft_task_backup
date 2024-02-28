import { StyleSheet } from "react-native";
import colors from "./Colors";

const searchStyle = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginRight: 13,
    borderRadius: 25,
    backgroundColor: colors.gray300,
    flex: 1
  },
  searchIcon: {
    marginRight: 20,
  },
  textInput: {
    color: colors.gray500,
  },
  filterButton: {
    borderRadius: 30,
    padding: 13,
    backgroundColor: "black",
  },
});

export default searchStyle;
