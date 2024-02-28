import { StyleSheet } from "react-native";
import colors from "./Colors";


const newArrivalsStyles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11,
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: "Poppins-Bold",
        color: "#000",
    },
    viewAllButton: {
        fontSize: 11,
        fontFamily: "Poppins-SemiBold",
        color: colors.gray400,
    },
    scrollViewContainer: {
        paddingRight: 16,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 160,
        marginHorizontal: 8,
    },
    productImage: {
        width: '100%',
        height: 170,
        borderRadius: 15,
        overflow: 'hidden',
    },
    productDetails: {
        paddingVertical: 11,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: "#000",
    },
    productName: {
        fontFamily: "Poppins-Regular",
        fontSize: 11,
        color: colors.gray400,
    },
    price: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        marginTop: 4,
        color: "#000",
    },
    addToFavoritesButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        backgroundColor: '#000',
        borderRadius: 20,
        zIndex: 3,
      },
});

export default newArrivalsStyles;
