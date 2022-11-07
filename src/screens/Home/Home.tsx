import React, { useMemo, useState } from 'react';
import RN from '../../components/common/react-native';
import styles from './styles';
import Carousel from '../../components/Carousel/Carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Product from '../../components/Product/Product';
import { discountedProducts, discountedProductsType } from '../../static/discountedProducts'; // static data
import TopBarBtn from '../../components/topBarBtn/TopBarBtn';


function Home() {
  return (
    <RN.ScrollView contentContainerStyle={{ paddingBottom: 55 }}>
      <RN.View style={styles.topBar}>
        <RN.View style={{ flexDirection: "row" }}>
          <RN.Image
            source={require('../../assets/Logo.png')}
            style={styles.logo}
          />
          <RN.View style={styles.textContainer}>
            <RN.Text style={styles.textAbove}>Welcome to</RN.Text>
            <RN.Text style={styles.textBelow}>Sample restaurant</RN.Text>
          </RN.View>
        </RN.View>
        <TopBarBtn isAbsolute={false} />
      </RN.View>

      <RN.View style={styles.carouselContainer}>
        <Carousel />
      </RN.View>

      <RN.View style={styles.restaurantFeatures}>
        <RN.View style={styles.featureBox}>
          <RN.Image source={require("../../assets/shop.png")} style={{ width: 108, height: 72 }} />
          <RN.Text style={styles.restaurantFeaturesTextAbove}>Store pickup</RN.Text>
          <RN.Text style={styles.restaurantFeaturesTextBelow}>Best quality</RN.Text>
        </RN.View>
        <RN.View style={styles.verticalLine}></RN.View>
        <RN.View style={styles.featureBox}>
          <RN.Image source={require("../../assets/delivery.png")} style={{ width: 108, height: 72 }} />
          <RN.Text style={styles.restaurantFeaturesTextAbove}>Delivery</RN.Text>
          <RN.Text style={styles.restaurantFeaturesTextBelow}>Always on time</RN.Text>
        </RN.View>
      </RN.View>

      <RN.View style={styles.reservation}>
        <RN.View style={styles.reservationTitle}>
          <RN.View>
            <RN.Text style={styles.reservationTitleText}>Online reservation</RN.Text>
            <RN.Text style={styles.reservationTitleText2}>Table booking</RN.Text>
          </RN.View>
          <RN.Image source={require("../../assets/reservation.png")} />
        </RN.View>
        <RN.View style={styles.reservationAction}>
          <RN.TouchableOpacity style={styles.reservationButton}>
            <FontAwesome5 name="calendar-alt" style={{ fontSize: 14, color: "#1A94FF" }} />
            <RN.Text style={styles.reservationBtnText}>Reserve a table</RN.Text>
          </RN.TouchableOpacity>
          <RN.TouchableOpacity style={styles.reservationButton2}>
            <RN.Text style={styles.reservationBtnText2}>My reservations</RN.Text>
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>
      <RN.View style={styles.productsCard}>
        <RN.Text style={styles.productsTitle}>Promotion campaign</RN.Text>
        <RN.View style={styles.productList}>
          {discountedProducts.map((item, index) => (
            <Product
              key={index}
              img={item.img}
              discountDate={item.discountDate}
              discountLabel={item.discountLabel}
            />
          ))}
        </RN.View>
      </RN.View>
    </RN.ScrollView >
  );
}

export default Home;
