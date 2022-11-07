import React from 'react';
import RN from '../../components/common/react-native';
import TopBarBtn from '../topBarBtn/TopBarBtn';
import styles from "./styles"

interface screenName {
    screenName: string
    children: any
}

function TopBar({ screenName, children }: screenName) {
    return (
        <RN.View style={styles.topBar}>
            <RN.Text style={styles.screenName}>{screenName}</RN.Text>
            <RN.View style={styles.topBarRight}>
                {children}
                <TopBarBtn />
            </RN.View>
        </RN.View>
    );
}

export default TopBar;
