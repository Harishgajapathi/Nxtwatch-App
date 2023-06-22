import {Text, View, StyleSheet, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ReactContext from '../../context/ReactContext'


const RenderAllVideos = (props) => {
        const {videodetails} = props
        const {id, title, thumbnailUrl, viewCount, publishedAt, name, profileImageUrl} = videodetails 
        const navigation = useNavigation()

        return(
          <ReactContext.Consumer>
            {value => {
                 
                 const {onChangeActiveId} = value

                 const onPressVideo = () => {
                  navigation.navigate("VideoPlayer", {activeVideoId: id})
                  onChangeActiveId(id)
                 }

                
                return(
                  <View>
          <Pressable style={{cursor:'pointer'}} onPress={onPressVideo}>
              <View style={Styles.ListContainer}>
                  <Image style={Styles.ImageControl} source={{uri: thumbnailUrl}}/>
                <View style={Styles.SubListsContainer}>
                    <Image source={{uri: profileImageUrl}} style={Styles.ProfileImage}/>
                <View style={Styles.ContentView}>
                    <Text style={Styles.TitleText}>{title}</Text>
                    <Text style={Styles.NameText}>{name}</Text>
                    <Text style={Styles.NameText}>{viewCount} | {publishedAt}</Text>
                </View>
                </View>
              </View>
              </Pressable>
              </View>
                )
            }}
          </ReactContext.Consumer>
          
        )
    }
  


export default RenderAllVideos

const Styles = StyleSheet.create({
    ImageEdit:{
      width:'100%'
    }
  ,
  ImageControl: {
    height:230,
    width:'100%'
  },
  ListContainer: {
   marginTop:5,
   width:'100%',
  },
  ProfileImage: {
    height:40,
    width:40,
    borderRadius:20,
    marginTop:6,
    marginLeft:8,
  },
  SubListsContainer: {
    width:'100%',
    padding:8,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
  },
  ContentView: {
    marginLeft: 12,
    padding:2,
    width:'100%',
    flex:1,

  },
  TitleText: {
    color: '#231f20',
    fontSize:17,
    fontWeight:500,
  },
  NameText: {
    color: '#383838',
    marginTop:5,
   fontSize: 15,
   fontWeight:400,
  }
  })