import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  Image,
  Pressable,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import productDetailsStyles from '../styles/ProductDetailsStyles';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/Home/HomeStackNavigator';
import Octicon from 'react-native-vector-icons/Octicons';
import OrderItem from '../types/OrderItem';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AddToFavsButton from '../components/AddToFavsButton';
import { useAppState } from '../components/AppStateContext';


type ProductDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailsScreen'
>;

interface ProductDetailsScreenProps {
  route: ProductDetailsRouteProp;
}

const PaginationIndicator: React.FC<{ index: number; currentIndex: number; }> = ({ index, currentIndex }) => {
  return (
    <View
      style={[
        productDetailsStyles.dot,
        index === currentIndex
          ? productDetailsStyles.activeDot
          : productDetailsStyles.inactiveDot,
      ]}
    />
  );
};

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {

  const { toggleFavorite, favorites, toggleAddToCart, cart } = useAppState();
  const { product } = route.params;

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const [orderItem, setOrderItem] = useState<OrderItem>({
    id: product.id,
    product: product,
    overallPrice: product.price,
    size: product.size[0],
    color: product.colors[0],
    quantity: 1,
  });

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(
      contentOffsetX / Dimensions.get('window').width
    );
    setCurrentIndex(newIndex);
  };

  const handleIncrement = () => {
    setOrderItem((prevOrder: OrderItem) => ({
      ...prevOrder,
      quantity: prevOrder.quantity + 1,
    }));
  };

  const handleDecrement = () => {
    setOrderItem((prevOrder: OrderItem) => ({
      ...prevOrder,
      quantity: prevOrder.quantity === 1 ? 1 : prevOrder.quantity - 1,
    }));
  };

  const setSize = (size: string) => {
    setOrderItem((prevOrder: OrderItem) => ({
      ...prevOrder,
      size: size,
    }));
    return;
  };

  const setColor = (color: string) => {
    setOrderItem((prevOrder: OrderItem) => ({
      ...prevOrder,
      color: color,
    }));
  };

  useEffect(() => {
    setOrderItem((prevOrder: OrderItem) => ({
      ...prevOrder,
      overallPrice: prevOrder.quantity * product.price,
    }));
  }, [orderItem.quantity, product.price]);

  return (
    <View style={productDetailsStyles.pageContainer}>
      <View>
        <View style={productDetailsStyles.header}>
          <Pressable onPress={goBack} style={productDetailsStyles.backButton}>
            <Octicon name="chevron-left" size={20} color={'#fff'} />
          </Pressable>

          <View style={productDetailsStyles.row}>
            <AddToFavsButton
              buttonStyles={productDetailsStyles.whiteButton}
              iconStyles={{ size: 20, color: '#000' }}
              onPress={toggleFavorite.bind(null, product)}
              favorite={favorites.includes(product)}
            />
            <Pressable onPress={toggleAddToCart.bind(null, orderItem)} style={productDetailsStyles.whiteButton}>
              <Ionicon name={cart.includes(orderItem) ? 'bag' : 'bag-outline'} size={20} color={'#000'} />
            </Pressable>
          </View>
      </View>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {product.imgPaths.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={productDetailsStyles.image}
            />
          ))}
        </ScrollView>
        <View style={productDetailsStyles.paginationWrapper}>
          {[...Array(3)].map((_, index) => (
            <PaginationIndicator
              key={index}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={productDetailsStyles.contentWrapper}
      >
        <View style={productDetailsStyles.row}>
          <View style={productDetailsStyles.columnLeft}>
            <Text style={productDetailsStyles.brand}>{product.brand}</Text>
            <Text style={productDetailsStyles.name}>{product.title}</Text>
            <View style={productDetailsStyles.starsWrapper}>
              {[...Array(product.rating)].map((_, index) => (
                <Octicon
                  key={index}
                  name="star-fill"
                  size={15}
                  color="#f0c14b"
                  style={{ marginRight: 2 }}
                />
              ))}
              <Text
                style={productDetailsStyles.baseText}
              >{` (${product.reviewsNumber} reviews)`}</Text>
            </View>
          </View>

          <View style={productDetailsStyles.columnRight}>
            <View style={productDetailsStyles.quantityWrapper}>
              <Pressable onPress={handleDecrement}>
                <Text style={productDetailsStyles.baseText}>-</Text>
              </Pressable>

              <Text style={productDetailsStyles.baseText}>
                {orderItem.quantity}
              </Text>

              <Pressable onPress={handleIncrement}>
                <Text style={productDetailsStyles.baseText}>+</Text>
              </Pressable>
            </View>

            <Text style={productDetailsStyles.stockText}>
              {product.isInStock ? 'Available in Stock' : 'Out of stock'}
            </Text>
          </View>
        </View>

        <View style={productDetailsStyles.row}>
          <View style={productDetailsStyles.sizeWrapper}>
            <Text style={[productDetailsStyles.stockText, { fontSize: 16 }]}>
              Size
            </Text>
            <View style={productDetailsStyles.sizeContainer}>
              {product.size.map((sizeItem) => (
                <Pressable
                  onPress={setSize.bind(null, sizeItem)}
                  key={sizeItem}
                  style={[
                    productDetailsStyles.sizeButton,
                    orderItem.size === sizeItem &&
                      productDetailsStyles.activeSizeButton,
                  ]}
                >
                  <Text
                    style={[
                      productDetailsStyles.sizeButtonText,
                      orderItem.size === sizeItem &&
                        productDetailsStyles.activeSizeButtonText,
                    ]}
                  >
                    {sizeItem}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={productDetailsStyles.colorContainer}>
            {product.colors.map((colorItem) => (
              <Pressable
                onPress={setColor.bind(null, colorItem)}
                key={colorItem}
                style={[
                  productDetailsStyles.colorButton,
                  colorItem === '#fff' && { borderWidth: 1 },
                  { backgroundColor: colorItem },
                ]}
              >
                {orderItem.color === colorItem && (
                  <Octicon
                    name="check"
                    size={12}
                    color={colorItem === '#000' ? '#fff' : '#000'}
                  />
                )}
              </Pressable>
            ))}
          </View>
        </View>

        <View>
          <Text style={productDetailsStyles.descriptionTitle}>Description</Text>
          <Text style={productDetailsStyles.descriptionText}>
            {product.description}
          </Text>
        </View>

        <View style={productDetailsStyles.row}>
          <View style={productDetailsStyles.columnLeft}>
            <Text style={productDetailsStyles.priceTitle}>Total Price</Text>
            <Text style={productDetailsStyles.priceText}>
              ${orderItem.overallPrice.toFixed(2)}
            </Text>
          </View>

          <Pressable onPress={toggleAddToCart.bind(null, orderItem)} style={productDetailsStyles.addToCartButton}>
            <Ionicon name="bag-outline" size={20} color="#fff" />
            <Text style={productDetailsStyles.addToCartButtonText}>
              {cart.includes(orderItem) ? 'Remove from' : 'Add to'} Cart
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
