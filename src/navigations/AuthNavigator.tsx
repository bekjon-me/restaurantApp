import React from 'react';
import RN from '../components/common/react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const CustomTabButton = props => (
  <RN.TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, { borderTopColor: '#1A94FF', borderTopWidth: 2 }]
        : props.style
    }
  />
);

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#1A94FF',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 5,
          position: 'absolute',
        },
      }}>
      {screens.map(({ name, component, icon, headerShown }) => (
        <Tab.Screen
          key={'name'}
          name={name}
          options={{
            headerLeftLabelVisible: false,
            headerShown: headerShown,
            tabBarButton: props => CustomTabButton(props),
            tabBarLabel: name,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name={icon}
                style={{ color: color, fontSize: size }}
              />
            ),
          }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomNavigator;
