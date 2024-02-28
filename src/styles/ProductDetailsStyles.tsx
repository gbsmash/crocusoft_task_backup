import { Dimensions, StyleSheet } from 'react-native';
import colors from './Colors';

const productDetailsStyles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'stretch',
    },
    imgScrollContainer: {
      flex:1,
    },
    image: {
      width: Dimensions.get('window').width,
      aspectRatio: 1,
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: 40,
      left: 20,
      right: 20,
      zIndex: 2,
      height: 40,
    },
    backButton: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.gray500,
      borderRadius: 20,
      backgroundColor: '#000',
    },
    whiteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      zIndex: 2,
      marginLeft: 10,
    },
    contentWrapper: {
      paddingHorizontal: 25,
      paddingVertical: 35,
      flexGrow:1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      bottom:10,
    },
    columnLeft: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    columnRight: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    starsWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    quantityWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 20,
      backgroundColor: colors.gray300,
      marginBottom: 8,
      width: 70,
    },
    stockText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 11,
      color: '#000',
    },
    baseText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#000',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    brand: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      marginVertical: 4,
    },
    name: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: colors.gray400,
    },
    addToCartButton: {
      backgroundColor: '#000',
      borderRadius: 40,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    addToCartButtonText: {
      color: '#fff',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      marginLeft: 5,
    },
    sizeWrapper: {
      flexDirection: 'column',
      marginTop: 10,
    },
    sizeContainer: {
      flexDirection: 'row',
      marginTop: 7,
    },
    sizeButton: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.gray500,
      borderRadius: 20,
      backgroundColor: '#fff',
      marginRight: 15,
    },
    sizeButtonText: {
      fontSize: 14,
      fontFamily: 'Poppins-SemiBold',
      color: colors.gray500,
    },
    activeSizeButton: {
      backgroundColor: '#000',
    },
    activeSizeButtonText: {
      color: '#fff',
    },
    colorContainer: {
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.8,
      elevation: 4,
    },
    colorButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderColor: colors.gray500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 7,
    },
    descriptionTitle: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      marginBottom: 4,
    },
    descriptionText: {
      fontSize: 11,
      fontFamily: 'Poppins-Regular',
      color: colors.gray400,
      marginBottom: 10,
    },
    priceTitle: {
      fontSize: 9,
      fontFamily: 'Poppins-Regular',
      color: colors.gray500,
    },
    priceText: {
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
    },
    paginationWrapper: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: 'white',
    },
    inactiveDot: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});


export default productDetailsStyles;
