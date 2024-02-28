import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import products from '../../data/Products';
import { masonryStyles } from '../../styles/MasonryStyles';
import Product from '../../types/Product';
import Category from '../../types/Category';
import AddToFavsButton from '../AddToFavsButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Home/HomeStackNavigator';
import newArrivalsStyles from '../../styles/NewArrivalsStyles';
import { useAppState } from '../AppStateContext';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const columnWidth = screenWidth / numColumns - 20;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { toggleFavorite, favorites } = useAppState();

  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetailsScreen', { product })}
    >
      <View style={masonryStyles.productCard}>
        <Image
          source={product.imgPaths[0]}
          style={masonryStyles.productImage}
        />
        <AddToFavsButton
          buttonStyles={newArrivalsStyles.addToFavoritesButton}
          iconStyles={{ size: 12, color: '#fff' }}
          onPress={toggleFavorite.bind(null, product)}
          favorite={favorites.includes(product)}
        />
        <Text style={masonryStyles.brand}>{product.brand}</Text>
        <Text style={masonryStyles.productName}>{product.title}</Text>
        <Text style={masonryStyles.price}>${product.price.toString()}</Text>
      </View>
    </Pressable>
  );
};

const Masonry: React.FC<{ activeCategory: Category }> = ({
  activeCategory,
}) => {
  const [columns, setColumns] = useState<Product[][]>(
    Array.from({ length: numColumns }, () => [])
  );

  useEffect(() => {
    let colHeights = new Array(numColumns).fill(0);
    let nextCol = 0;
    const categoryProducts = activeCategory
      ? products.filter((product) => product.category === activeCategory.title)
      : products;

    const newColumns = Array.from(
      { length: numColumns },
      () => [] as Product[]
    );
    categoryProducts.forEach((product) => {
      newColumns[nextCol].push(product);

      colHeights[nextCol] += 300;

      nextCol = colHeights.indexOf(Math.min(...colHeights));
    });

    setColumns(newColumns);
  }, [activeCategory]);

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={masonryStyles.masonryContainer}>
        {columns.map((col, index) => (
          <View
            key={`col_${index}`}
            style={[
              { width: columnWidth },
              index === 1 ? masonryStyles.column2 : null,
            ]}
          >
            {col.map((product, colIndex) => (
              <ProductItem key={`product_${colIndex}`} product={product} />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Masonry;
