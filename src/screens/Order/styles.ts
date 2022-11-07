import RN from "../../components/common/react-native";

export default RN.StyleSheet.create({
    orderScreen: {
        backgroundColor: "#fff",
        height: "100%"
    },

    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
    },

    nonActive: {
        flex: 1,
        textAlign: "center",
        paddingVertical: 12,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color: '#808089',
        borderBottomColor: "#EBEBF0",
        borderBottomWidth: 1,
    },

    active: {
        flex: 1,
        textAlign: "center",
        paddingVertical: 12,
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        color: '#1A94FF',
        borderBottomColor: "#1A94FF",
        borderBottomWidth: 1,
    },

    noOrderImg: {
        marginTop: 75,
        alignSelf: "center",
    },

    messageDiv: {
        marginTop: 24,
        paddingHorizontal: 16,
        alignItems: "center"
    },

    noOrderTitle: {
        fontFamily: 'Inter-Medium',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: '#27272A',
    },

    noOrderMessage: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        color: '#27272A',
    },

    messageBtn: {
        backgroundColor: "#1A94FF",
        width: "100%",
        paddingVertical: 8,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 16
    },

    messageBtnText: {
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    }
})