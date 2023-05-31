import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllVideos from './AllVideos';
import Trending from './Trending';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
function Home() {
    
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'All Videos') {
              iconName = 'play-circle';
              size = focused ? 22 : 20;
            } else if (route.name === 'Trending') {
              iconName = 'fire';
              size = focused ? 22 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: '#ff0000',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: { fontSize: 15 },
          showIcon: true,
        }}
      >
        <Tab.Screen
          name="All Videos"
          component={AllVideos}
          options = {{header: () => null}}

        />
        <Tab.Screen
          name="Trending"
          component={Trending}
          options = {{header: () => null}}
        />
      </Tab.Navigator> 
  )
}

export default Home;