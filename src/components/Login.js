import {useState, useEffect} from 'react'
import {Text, View, Alert, Pressable, StyleSheet, Image, TextInput} from 'react-native'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

function Login({navigation}) {
        const [name, setName] = useState('')
        const [password, setPassword] = useState('')

        const onPressHandler = async() => {
            if (name.length === 0 || password.length === 0){
                 Alert.alert('Warning', 'Provide your Username and Password')
            }
            else if (password.length<7){
                Alert.alert('Warning', 'Provide atleast 7 Characters for strong password')
            }
            else {
                try {
                    await AsyncStorage.setItem('Username', name);
                    navigation.navigate('home');
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return(
            <DismissKeyboard>
              <View style={styles.LoginCard}>
                <View style={styles.Cardview}>
                <Image style={styles.ImageLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'}}/>
                <View style={styles.Username}>
                    <Text style={styles.InputText}>Username</Text>
                    <TextInput style={styles.InputEl} placeholder='Enter your username' value={name} onChangeText={setName}/>
                </View>
                <View style={styles.Username}>
                    <Text style={styles.InputText}>Password</Text>
                    <TextInput secureTextEntry style={styles.InputEl} placeholder='Enter your password' value={password} onChangeText={setPassword}/>
                </View>
                <Pressable onPress={onPressHandler} style={({pressed}) => [{backgroundColor: pressed? '#7e858e' : '#1e293b'},styles.PressButton]}>
                    <Text style={styles.ButtonText}>Login</Text>
                </Pressable>
                </View>  
              </View>
              </DismissKeyboard>
           
        )
    }


export default Login

const styles = StyleSheet.create({
    LoginCard: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },

    ImageLogo: {
        height:40,
        width:200,
        marginLeft:50,
    },
    InputText: {
        color: '#475569',
        fontSize: 18,
        fontWeight:'bold'
    },
    Username: {
        justifyContent:'flex-start',
        marginTop:20,
    },
    InputEl: {
        borderWidth:1,
        borderColor: '#94a3b8',
        width:280,
        height:44,
        padding:10,
        fontSize:18,
        marginTop:4,

    },
    PressButton: {
        marginTop:40,
        height:45,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:80,
    },
    ButtonText: {
        fontSize:20,
        color:'#ffffff'
    },
    Cardview: {
        shadowColor:'#171717',
        shadowOffset: {width: -2, height:4},
        shadowOpacity:0.2,
        shadowRadius:3,
        borderWidth:2,
        padding:35,
        borderColor:'#475569',
        borderRadius: 8,
    }
})