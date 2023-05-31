import {View, Text, Pressable,Image, StyleSheet} from 'react-native'
import {useState ,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('Username')
                .then(value => {
                    if (value != null) {
                        let user = value;
                        setName(user)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
     
    
    
    return (
    <View style={Styles.HeaderContainer}>
        <View style={Styles.HeaderContent}>
      <Image style={Styles.HeaderLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'}}/>
      <View style={Styles.NameView}>
        <Image style={Styles.ProfileLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'}}/>
        <Text style={Styles.NameText}>{name}</Text>
      </View>
    </View>
    </View>
)}

export default Header

const Styles = StyleSheet.create({
    HeaderContainer: {
        height:50,
        backgroundColor: ' #f1f5f9',
    },
    HeaderLogo: {
        height:30,
        width:140,
        marginLeft:6,
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
    }
})