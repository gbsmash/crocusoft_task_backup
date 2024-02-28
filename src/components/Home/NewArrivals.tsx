import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import newArrivalsStyles from "../../styles/NewArrivalsStyles";
import Product from "../../types/Product";
import AddToFavsButton from "../AddToFavsButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Home/HomeStackNavigator";
import { useAppState } from "../AppStateContext";


const NewArrivals: React.FC<{ newArrivals: Product[] }> = ({ newArrivals }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'HomeScreen'>>();
  const { toggleFavorite, favorites } = useAppState();

  return (
    <View style={newArrivalsStyles.container}>
      <View style={newArrivalsStyles.header}>
        <Text style={newArrivalsStyles.headerTitle}>New Arrivals</Text>
        <Pressable onPress={() => navigation.navigate("ProductListScreen")}>
          <Text style={newArrivalsStyles.viewAllButton}>View All</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={newArrivalsStyles.scrollViewContainer}
      >
        {newArrivals.map((product) => (
          <View key={product.id} style={newArrivalsStyles.productCard}>
            <Image
              source={product.imgPaths[0]}
              style={newArrivalsStyles.productImage}
            />
            <AddToFavsButton
              buttonStyles={newArrivalsStyles.addToFavoritesButton}
              iconStyles={{ size: 12, color: "white"}}
              onPress={toggleFavorite.bind(null, product)}
              favorite={favorites.includes(product)}
            />
            <View style={newArrivalsStyles.productDetails}>
              <Text style={newArrivalsStyles.brand}>{product.brand}</Text>
              <Text style={newArrivalsStyles.productName}>{product.title}</Text>
              <Text style={newArrivalsStyles.price}>${product.price.toString()}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewArrivals;
