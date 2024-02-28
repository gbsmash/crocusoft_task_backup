import { StyleSheet } from 'react-native';
import colors from './Colors';

export const masonryStyles = StyleSheet.create({
  masonryContainer: {
    marginTop: 20,
    flex:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  productCard: {
    borderRadius: 10,
    marginVertical: 10,
    width: 160,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  brand: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000',
  },
  productName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: colors.gray400,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: 4,
    color: '#000',
  },
  column2: {
    marginTop: 40,
  },
});
