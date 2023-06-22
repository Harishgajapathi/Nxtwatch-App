import {useState, useEffect} from 'react'
import {Text, View, Pressable, StyleSheet, Image, TextInput,Keyboard, TouchableWithoutFeedback  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

function Login({navigation}) {
        const [username, setName] = useState('')
        const [password, setPassword] = useState('')
        const [errorMsg, setErrorMsg] = useState("")
        const [isError, setErrorPossible] = useState(false)
        
        useEffect(() => {
            getData();
        }, []);
    
        const getData = () => {
            try {
                AsyncStorage.getItem('Username')
                    .then(value => {
                        if (value != null) {
                            navigation.navigate('home');
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        }

       

        const onPressHandler = async () => {

            const userDetails = {username, password}
            const url = 'https://apis.ccbp.in/login'
            const options = {
                    method: 'POST',
                    body: JSON.stringify(userDetails),
                }
            const response = await fetch(url, options)
            const data = await response.json()
           

            if (response.ok){
                setErrorPossible(false)
                setName('')
                setPassword('')
                await AsyncStorage.setItem('Username', username);
                navigation.navigate('home');
            }
            else{
                setErrorPossible(true)
                setErrorMsg(data.error_msg)
            }
        }

        return(
            <DismissKeyboard>
              <View style={styles.LoginCard}>
                <View style={styles.Cardview}>
                <Image style={styles.ImageLogo} source={{uri: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'}}/>
                <View style={styles.Username}>
                    <Text style={styles.InputText}>Username</Text>
                    <TextInput style={styles.InputEl} placeholder='Enter your username' value={username} onChangeText={setName}/>
                </View>
                <View style={styles.Username}>
                    <Text style={styles.InputText}>Password</Text>
                    <TextInput secureTextEntry style={styles.InputEl} placeholder='Enter your password' value={password} onChangeText={setPassword}/>
                </View>
                {isError && <Text style={styles.ErrorText}>*{errorMsg}</Text>}
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
        backgroundColor:'#f4f4f4',
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
    },
    ErrorText: {
        color: '#ff0000',
        marginVertical:5,
        fontSize:16,
    }
})