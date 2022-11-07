import React from "react";
import RN from "../common/react-native";
import styles from "./styles";
import { Store } from "../../static/storesList";

const StoreCard = ({ name, address }: Store) => {
    return (
        <RN.View style={styles.container}>
            <RN.Image source={require("../../assets/Store.png")} style={styles.storeIcon} />
            <RN.View>
                <RN.Text style={styles.storeName}>{name}</RN.Text>
                <RN.Text style={styles.storeAddress}>{address}</RN.Text>
            </RN.View>
        </RN.View>
    )

}
export default StoreCard;