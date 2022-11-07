import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 57,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },

    screenName: {
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        color: '#27272A',
    },

    topBarRight: {
        flexDirection: "row",
    }
})