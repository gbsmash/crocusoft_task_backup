import React from "react";
import { View, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import searchStyle from "../styles/SearchStyle";

const Search: React.FC = () => {
  return (
    <View style={searchStyle.searchWrapper}>
      <View style={searchStyle.searchBar}>
        <Icon
          name="search"
          size={18}
          color="black"
          style={searchStyle.searchIcon}
        />
        <TextInput placeholder="Search..." style={searchStyle.textInput} />
      </View>

      <Pressable style={searchStyle.filterButton}>
        <Icon name="filter" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default Search;
