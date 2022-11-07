import RN from "../common/react-native"

 const styles = RN.StyleSheet.create({
    productContainer: {
     flexDirection: "column",
     marginBottom: 16,
     width: "48%",
    },

    productImg: {
        width: "100%",
        borderRadius: 8,
        resizeMode: "cover",
    },

    discountLabel: {
        fontFamily: 'Inter-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        color: "#27272A",
    },

    discountDate: {
        fontFamily: 'Inter-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 10,
        color: "#808089",
    },

    productList: {
        flex: 1,
    }

})

export default styles