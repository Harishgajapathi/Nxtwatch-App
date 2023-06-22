import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login'
import Home from './src/components/Home';
import {useState} from 'react'
import ReactContext from './context/ReactContext';
import VideoPlayer from './src/components/VideoPlayer';

const Stack  = createStackNavigator()

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState("")

  const onChangeActiveId = (id) => {
    setActiveVideoId(id)
  }


  return (
    <ReactContext.Provider value={{
      activeId: activeVideoId,
      onChangeActiveId,
    }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{header: () => null}}/>
        <Stack.Screen name="home" component={Home} options={{header: () => null}}/>
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{header: () => null}}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </ReactContext.Provider>
  );
}


