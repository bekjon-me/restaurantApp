import React from 'react';
import RN from '../../components/common/react-native';
import TopBarBtn from '../../components/topBarBtn/TopBarBtn';
import styles from './styles';
import StoreCard from '../../components/StoreCard/StoreCard';
import storesList from '../../static/storesList';
import TopBar from '../../components/TopBar/TopBar';

function Stores() {
  const [text, setText] = React.useState('');
  const [stores, setStores] = React.useState(storesList);

  const findStore = (text: string) => {
    setText(text);
    const filteredStores = storesList.filter((store) => {
      return store.name.toLowerCase().includes(text.toLowerCase());
    });
    setStores(filteredStores);
  }

  return (
    <RN.ScrollView contentContainerStyle={{ paddingBottom: 55 }}>
      <TopBar screenName={"Stores"} />

      <RN.View style={styles.searchBox}>
        <RN.View style={styles.searchDiv}>
          <RN.Image source={require("../../assets/searchIcon.png")} style={styles.searchIcon} />
          <RN.TextInput style={styles.searchInput} value={text} onChangeText={findStore} placeholder={"Search store"} />
        </RN.View>
      </RN.View>

      <RN.View style={styles.productsCard}>
        {stores.map((store, index) => (
          <StoreCard key={index} name={store.name} address={store.address} />
        ))}
      </RN.View>
    </RN.ScrollView>
  );
}

export default Stores;
