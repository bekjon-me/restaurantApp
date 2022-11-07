import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    topBarBtn: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 64,
        padding: 2,
        marginLeft: 10,
    },

    topBarBtnAbsolute: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 64,
        padding: 2,
        marginLeft: 10,
        position: "absolute",
        right: 16,
        bottom: 40
    },

    verticalLine: {
        width: 1,
        height: 16,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    }
})