import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const initialState={
  name:'',
  nasa_jpl_url:'',
  is_potentially_hazardous_asteroid:'',
}

const About = ({route,navigation}:any) => {
  const [data,setData] = useState(initialState)
  const [loading,setLoading] = useState(true)
  const {id} = route.params
  // console.log(typeof id);

  const fetchData=async(id:any)=>{
    setLoading(true)
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=bs0pGZJVCa2tEa0lO6i9TvwfL6aTo2yXPaB3dEab`
    const response = await fetch(url);
    console.log(response.status);
    if (response.status === 404){
      setLoading(false)
      navigation.replace('NotFound')
    }else{
      setLoading(false)
      const responseData = await response.json();
      setData({
        name : responseData.name,
        nasa_jpl_url:responseData.nasa_jpl_url,
        is_potentially_hazardous_asteroid:responseData.is_potentially_hazardous_asteroid.toString(),
      })
    }
    // console.log(responseData);

  }

  useEffect(()=>{
    fetchData(id)
  },[id])
  return (
    <ImageBackground source={require("../../assets/images/abt-bg.jpeg")} style={styles.aboutBg}>
      {
        loading?<Text style={styles.detailsTxt}>Loading...</Text> : (
        <View style={styles.detailsCard}>            
          <Text style={styles.detailsTxt}><Text style={styles.spTxt}>Name</Text> : {data.name}</Text>
          <Text style={styles.detailsTxt}><Text style={styles.spTxt}>URL</Text> : {data.nasa_jpl_url}</Text>
          <Text style={styles.detailsTxt}><Text style={{color:'#fc6203'}}>Is Hazardous</Text> : {data.is_potentially_hazardous_asteroid}</Text>
      </View> 
        )
      }           
    </ImageBackground>    
  )
}

const styles = StyleSheet.create({
  aboutBg:{
    flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
  },
  detailsCard:{
    width:'90%',
    padding:25,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:8,
  },
  detailsTxt:{
    fontSize:20,
    fontWeight:'800',
    color:'#fff'
  },
  spTxt:{
    color:'#4287f5',
  },
})

export default About