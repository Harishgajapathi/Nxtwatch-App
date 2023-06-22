import React from 'react';
import {View, Text, Pressable,Image, StyleSheet, Modal} from 'react-native'
import {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllVideos from './AllVideos';
import Trending from './Trending';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function Home({navigation}) {

   const [modalVisible, setModalVisible] = useState(false)

  const OnPressLogout = () => {
    setModalVisible(prevModal => !prevModal)
  }

  const onPressModalExit = async() => {
    await AsyncStorage.clear();
    setModalVisible(prevModal => !prevModal)
    navigation.navigate('login') 
  }
    
  return (
    <View style={{flex:1}}>
      <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={() => {
            setModalVisible(prevModal => !prevModal)
          }}>
        <View style={Styles.centerd_view}>
        <View style={Styles.warning_modal}>
          <Text style={{fontSize:22, fontWeight:'bold'}}>Confirm to exit?</Text>
          <View style={Styles.ExitModalDesign}>
            <Pressable onPress={onPressModalExit}><Text style={{fontSize:18, color:'#3b82f6', fontWeight:'bold'}}>OK</Text></Pressable>
            <Pressable onPress={() => setModalVisible(prevModal => !prevModal)}><Text style={{fontSize:18, marginLeft:45, color:'#3b82f6'}}>CANCEL</Text></Pressable>
          </View>
        </View>
        </View>
      </Modal>
      <View style={Styles.HeaderContainer}>
        <View style={Styles.HeaderContent}>
      <Image style={Styles.HeaderLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'}}/>
      <View style={Styles.NameView}>
        <Image style={Styles.ProfileLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'}}/>
        <Pressable onPress={OnPressLogout} style={Styles.LogoutBtn}><Text style={Styles.BtnText}>Logout</Text></Pressable>
      </View>
    </View>
    </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'All Videos') {
              iconName = 'play-circle';
              size = focused ? 25 : 20;
            } else if (route.name === 'Trending') {
              iconName = 'fire';
              size = focused ? 25 : 20;
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
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#ffffff',
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
      </View>
      
  )
}

const Styles = StyleSheet.create({
  HeaderContainer: {
      height:46,
      backgroundColor: '#ffffff',
  },
  HeaderLogo: {
      height:29,
      width:140,
      marginLeft:10,
  },
  HeaderContent:{
      flex:1,
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center',
  },
  ProfileLogo: {
      height:38,
      width:38,
  },
  NameView: {
      flexDirection:'row',
      alignItems:'center',
     marginRight:12,
  },
  NameText: {
      fontSize:20,
      marginLeft:6,
      fontStyle:'italic',
      fontWeight:500,
      color: '#1e293b',
  },
  LogoutBtn: {
      borderWidth:2,
      backgroundColor: 'transparent',
      marginLeft:15,
      borderRadius:6,
      borderColor:'#555',
      height:35,
      width:70,
      justifyContent:'center',
      alignItems:'center' 
  },
  BtnText: {
      fontSize:16,
      color:'#555',
      textAlign:'center'

  },
  warning_modal: {
    height:160,
    width:260,
    backgroundColor:"#f1f5f9",
    borderRadius: 20,
    padding:25,
  },
  centerd_view: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099'
  },
  ExitModalDesign: {
    marginTop:40,
    height:60,
    flexDirection:'row',
  }
})

export default Home;