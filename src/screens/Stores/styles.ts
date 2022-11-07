import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    searchBox: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: "#fff",
    },

    searchDiv: {
        position: "relative",
        height: 40,
        width: "100%",
        borderColor: "#DDDDE3",
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },

    searchIcon: {
        width: 18,
        height: 18,
        marginLeft: 11,
        marginRight: 11,
    },

    searchInput: {
        position: "absolute",
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color: '#808089',
        width: "90%",
        right: 8,
    },

    productsCard: {
        marginTop: 2,
        marginBottom: 16,
    }
})