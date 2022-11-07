import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    container: {
        marginTop: 12,
        flexDirection: "row",
        marginHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 60,
    },

    storeIcon: {
        marginRight: 8,
    },

    storeName: {
        fontFamily: 'Inter-Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        color: '#27272A',
    },

    storeAddress: {
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: '#808089',
    }
})