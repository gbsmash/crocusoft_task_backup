import { StyleSheet } from 'react-native';
import colors from './Colors';

export const productListStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  categoriesScrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flex: 1,
    height: 30,
    marginBottom: 15,
  },
  category: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    color: '#fff',
  },
  inactiveCategory: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.gray400,
  },
  inactiveCategoryText: {
    color: '#000',
  },
});
