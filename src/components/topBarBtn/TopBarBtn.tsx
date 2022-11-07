import React from "react";
import RN from "../../components/common/react-native";
import styles from "./styles";

function TopBarBtn({ isAbsolute }: { isAbsolute: boolean }) {
    return (
        <RN.TouchableOpacity style={isAbsolute ? styles.topBarBtnAbsolute : styles.topBarBtn}>
            <RN.Text>•••</RN.Text>
            <RN.View style={styles.verticalLine}></RN.View>
            <RN.Image source={require("../../assets/cancel.png")} />
        </RN.TouchableOpacity >
    );
}


export default TopBarBtn;