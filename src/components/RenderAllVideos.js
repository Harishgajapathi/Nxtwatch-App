import {Component} from 'react'
import {Text, View, FlatList, ScrollView, StyleSheet, Image} from 'react-native'


class RenderAllVideos extends Component{
    render(){
        const {videodetails} = this.props
        const {title, thumbnailUrl, viewCount, publishedAt, name, profileImageUrl} = videodetails 
        return(
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
        )
    }
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
   marginTop:10,
  },
  ProfileImage: {
    height:40,
    width:40,
    borderRadius:20,
    marginTop:4,
    marginLeft:8,
  },
  SubListsContainer: {
    width:'90%',
    padding:8,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
  },
  ContentView: {
    marginLeft: 18,
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