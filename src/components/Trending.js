import {Component} from 'react'
import { StatusBar, View, FlatList, StyleSheet} from 'react-native'
import RenderAllVideos  from './RenderAllVideos'

class Trending extends Component{
    state = {homeVideos: []}

    componentDidMount() {
        this.getVideos()
      }
    
      getVideos = async () => {
        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
        const url = "https://apis.ccbp.in/videos/trending"
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
          const response = await fetch(url, options)
          const data = await response.json()
          const updatedData = data.videos.map(eachVideo => ({
            id: eachVideo.id,
            title: eachVideo.title,
            thumbnailUrl: eachVideo.thumbnail_url,
            viewCount: eachVideo.view_count,
            publishedAt: eachVideo.published_at,
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          }))
          this.setState({
            homeVideos: updatedData,
          })
      } 

    render(){
        const {homeVideos} = this.state
        return(
            
                <View style={Styles.MainContainer}>
                  <StatusBar/>
                    <FlatList data={homeVideos} 
                    renderItem={({item}) => (
                      <RenderAllVideos videodetails={item}/>
                    )}
                    keyExtractor={item => item.id}/>
                </View>
        
        )
    }
}

export default Trending

const Styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  ImageEdit:{
    width:'100%'
  }
,
ImgaeControl: {
  height:200,
  width:'100%'
},
})