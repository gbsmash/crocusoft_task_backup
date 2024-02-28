import React from "react";
import { Text, ScrollView, Pressable } from "react-native";
import Category from "../../types/Category";
import { productListStyles } from "../../styles/ProductListStyles";


type SetActiveCategoryType = (category: Category) => void;

const CategoriesScroll: React.FC<{
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: SetActiveCategoryType;
}> = ({ categories, activeCategory, setActiveCategory }) => {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={productListStyles.categoriesScrollContainer}
    >
      {categories.map((category) => (
        <Pressable
          style={[productListStyles.category, category.id === activeCategory.id ? null : productListStyles.inactiveCategory]}
          key={category.id}
          onPress={() => {
            setActiveCategory(category);
          }}
        >
          <Text style={[productListStyles.categoryText, category.id === activeCategory.id ? null : productListStyles.inactiveCategoryText]}>{category.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategoriesScroll;
