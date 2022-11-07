import Home from './Home/Home';
import Order from './Order/Order';
import Profile from './Profile/Profile';
import Stores from './Stores/Stores';
import React from 'react';

interface ScreenType {
  name: string;
  component: React.FC;
  icon: string;
  headerShown: boolean;
}

const screens: ScreenType[] = [
  {name: 'Home', component: Home, icon: 'home', headerShown: false},
  {name: 'Stores', component: Stores, icon: 'store', headerShown: false},
  {name: 'Order', component: Order, icon: 'shopping-cart', headerShown: false},
  {
    name: 'Profile',
    component: Profile,
    icon: 'user-circle',
    headerShown: false,
  },
];

export default screens;
