import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    userBackgroundDiv: {
        position: "relative"
    },

    userBackground: {
        width: "100%",
    },

    userImg: {
        position: "absolute",
        alignSelf: "center",
        bottom: "-35%",
    },

    username: {
        marginLeft: 8,
        fontFamily: 'Inter-Bold',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        color: "#27272A",
        marginTop: 55,
        alignSelf: "center"
    },

    userCard: {
        position: "relative",
        width: RN.Dimensions.get("window").width -32,
        marginHorizontal: 16,
        marginTop: 16,
        alignSelf: "center",
    },

    userBackgroundCardImg: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        alignSelf: "center",
    },

    details: {
        width: "100%",
        height: "100%",
        position: "absolute",
        padding: 24,
        justifyContent: "space-between",
    },

    helloText: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        color: "#fff",
    },

    usernameText: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        color: "#fff",
    },

    moreDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    joinDate: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        color: "#fff",
    },

    points: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        color: "#fff",
    },

    barcode: {
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16,
        marginVertical: 12,
        backgroundColor: "#FFF",
        borderRadius: 8,
    },

    barcodeText: {
        marginTop: 8,
    }, 

    support: {
        backgroundColor: "#fff",
        marginHorizontal: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    supportText: {
        fontFamily: 'Inter-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        color: "#28282B",
    },

    supportText2: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        color: "#808089",
    },

    terms: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        color: "#1A94FF",
        textDecorationLine: "underline",
        alignSelf: "center",
        marginTop: 71,
    },


    version: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 10,
        color: "#808089",
        alignSelf: "center",
        marginTop: 16,
    }
})