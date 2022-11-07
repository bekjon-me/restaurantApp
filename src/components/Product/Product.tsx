import React from "react";
import styles from "./styles";
import RN from "../common/react-native";
import { discountedProductsType } from "../../static/discountedProducts";

const Product: React.FC<discountedProductsType> = ({ img, discountDate, discountLabel }) => {
    return (
        <RN.View style={styles.productContainer}>
            <RN.Image source={img} style={styles.productImg} />
            <RN.Text style={styles.discountLabel}>{discountLabel}</RN.Text>
            <RN.Text style={styles.discountDate}>{discountDate}</RN.Text>
        </RN.View>
    );
};

export default Product;