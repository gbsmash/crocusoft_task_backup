import React, { useState } from 'react';
import { View } from 'react-native';
import { productListStyles } from '../styles/ProductListStyles';
import Header from '../components/Header';
import Search from '../components/Search';
import CategoriesScroll from '../components/ProductList/CategoriesScroll';
import { categories } from '../data/Categories';
import Category from '../types/Category';
import Masonry from '../components/ProductList/Masonry';


const ProductListScreen: React.FC<{}> = () => {

  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  return (
    <View style={productListStyles.pageContainer}>
      <Header page='ProductList'/>
      <Search />
      <CategoriesScroll categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <Masonry activeCategory={activeCategory} />
    </View>
  );
};

export default ProductListScreen;
