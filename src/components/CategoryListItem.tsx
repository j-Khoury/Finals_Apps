import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../contants';

interface CategoryListItemProps {
  name: string;
  isActive: boolean;
  selectCategory: (name: string) => void;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  name,
  isActive,
  selectCategory,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => selectCategory(name)}>
      <Text
        style={
          isActive ? styles.activeCategoryText : styles.inActiveCategoryText
        }>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_YELLOW,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  activeCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  inActiveCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.INACTIVE_GREY,
  },
});

export default CategoryListItem;
