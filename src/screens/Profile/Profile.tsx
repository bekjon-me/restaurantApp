import React, { useEffect } from 'react';
import RN from '../../components/common/react-native';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import TopBarBtn from '../../components/topBarBtn/TopBarBtn';

function Profile() {

  useFocusEffect(() => {
    // This will run when component is `focused` or mounted.
    RN.StatusBar.setHidden(true);

    // This will run when component is `blured` or unmounted.
    return () => {
      RN.StatusBar.setHidden(false);
    }
  });

  return (
    <RN.ScrollView>
      <RN.View style={styles.userBackground}>
        <RN.Image style={styles.userBackground} source={require("../../assets/userBackground.png")} />
        <TopBarBtn isAbsolute={true} />
        <RN.Image style={styles.userImg} source={require("../../assets/userImg.png")} />
      </RN.View>
      <RN.Text style={styles.username}>User name</RN.Text>

      <RN.View style={styles.userCard}>
        <RN.Image
          style={styles.userBackgroundCardImg}
          source={require("../../assets/userCardBg.png")}
        />
        <RN.View style={styles.details}>
          <RN.View>
            <RN.Text style={styles.helloText}>Hello</RN.Text>
            <RN.Text style={styles.usernameText}>Username</RN.Text>
          </RN.View>
          <RN.View style={styles.moreDetails}>
            <RN.Text style={styles.joinDate}>Join date: 20/04/2020</RN.Text>
            <RN.Text style={styles.points}>420 points</RN.Text>
          </RN.View>
        </RN.View>
      </RN.View>

      <RN.View style={styles.barcode}>
        <RN.Image source={require("../../assets/barcode.png")} />
        <RN.Text style={styles.barcodeText}>42069-69420-42069</RN.Text>
      </RN.View>

      <RN.View style={styles.support}>
        <RN.View style={{ flexDirection: "row" }}>
          <RN.Image source={require("../../assets/chat.png")} />
          <RN.View style={{ marginLeft: 8 }}>
            <RN.Text style={styles.supportText}>Support</RN.Text>
            <RN.Text style={styles.supportText2}>Call or chat with us</RN.Text>
          </RN.View>
        </RN.View>
        <RN.Image source={require("../../assets/rightArrow.png")} />
      </RN.View>

      <RN.Text style={styles.terms}>Terms and Conditions</RN.Text>
      <RN.Text style={styles.version}>version: 1.0.0</RN.Text>

    </RN.ScrollView>
  );
}

export default Profile;
