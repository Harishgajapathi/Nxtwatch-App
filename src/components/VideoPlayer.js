import {Text, View, StyleSheet, Button, StatusBar} from 'react-native'
import React from 'react';
import {useState, useEffect} from 'react'
import { Video, ResizeMode } from 'expo-av';

const VideoPlayer = ({ route}) => {

   const [videoDetails, setVideoDetails] = useState([])
   const [channelDetails, setChannelDetails] = useState([])
   

   const {activeVideoId} = route.params

   useEffect(() => {
    GetVideos()
   },[activeVideoId])

   const GetVideos = async () => {
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
    const url = `https://apis.ccbp.in/videos/${activeVideoId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
      const response = await fetch(url, options)
    
      const responseData = await response.json()
      const data = responseData.video_details
      const convertedData = {
        channel: data.channel,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      setVideoDetails(convertedData)
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      } 
      setChannelDetails(channelData) 
   }
       

        return (
        <View style={styles.container}>
      <Video
        
        style={styles.video}
        source={{uri: videoDetails.videoUrl}}
       
        resizeMode="contain"
        isLooping
        
      />
      
      <StatusBar style="auto" />
    </View>)


  
}

export default VideoPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height:200,
    width:300,
  },
  buttons: {
    margin: 16
  }
});