import React from 'react';
import RN from '../../components/common/react-native';
import TopBar from '../../components/TopBar/TopBar';
import styles from "./styles"

const RefreshBtn = () => {
  return (
    <RN.TouchableOpacity style={{ justifyContent: "center" }}>
      <RN.Image source={require("../../assets/refresh.png")} />
    </RN.TouchableOpacity>
  )
}

function Order() {
  const [active, setActive] = React.useState("pickup");

  return (
    <RN.ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={styles.orderScreen}>
      <TopBar screenName='Orders' children={<RefreshBtn />} />

      <RN.View style={styles.container}>
        <RN.Text
          onPress={() => setActive("pickup")}
          style={active === "pickup" ? styles.active : styles.nonActive}
        >
          Store pickup
        </RN.Text>
        <RN.Text
          onPress={() => setActive("delivery")}
          style={active === "delivery" ? styles.active : styles.nonActive}
        >
          Delivery
        </RN.Text>
      </RN.View>

      <RN.Image style={styles.noOrderImg} source={require("../../assets/noOrder.png")} />

      <RN.View style={styles.messageDiv}>
        <RN.Text style={styles.noOrderTitle}>You have no order</RN.Text>
        <RN.Text style={styles.noOrderMessage}>How about trying our new drinks?</RN.Text>
        <RN.TouchableOpacity style={styles.messageBtn}>
          <RN.Text style={styles.messageBtnText}>Order now!</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.ScrollView>
  );
}

export default Order;
