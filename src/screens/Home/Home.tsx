import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}:any) => {

    const [btn,setBtn] = useState(true);
    const [id,setId] = useState('');
    
    const handleInput=(text:any)=>{
        setId(text)
        if(id !== ''){
            setBtn(false)
        }
    }

    useEffect(()=>{
        if(id === ''){
            setBtn(true)
        }
    },[id])

    const handleSubmit=()=>{
        navigation.navigate('About',{id:id})
        setId('')        
    }

    // let asteroidArray;

    const getAsteroidId=async()=>{
        const url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=bs0pGZJVCa2tEa0lO6i9TvwfL6aTo2yXPaB3dEab'
        const response = await fetch(url);
        const responseData = await response.json();
        const asteroidsArray= responseData.near_earth_objects
        const randomIndex = Math.ceil(Math.random()*(asteroidsArray.length-1))
        const randomId = asteroidsArray[randomIndex].id
        
        return randomId
    }        

    const handleRandom=async()=>{
        const randomId = await getAsteroidId()
        navigation.navigate('About',{id:randomId})
    }

  return (
    <ImageBackground style={styles.homeBg} source={require('../../assets/images/home-bg.jpeg')}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
      <TextInput style={styles.inputBox} placeholder='Enter Asteroid Id'
        value={id} onChangeText={handleInput}
      />
      <View style={styles.btnContainer}>
        <Pressable style={btn?styles.disBtn:styles.btn} disabled={btn} onPress={handleSubmit}>
            <Text style={styles.btnTxt}>Submit</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleRandom}>
            <Text style={styles.btnTxt}>Random</Text>
        </Pressable>
        
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    homeBg:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        height:150,
        width:150,
        marginVertical:25,
    },
    inputBox:{
        width:'85%',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        color:"#fff",
        fontSize:18,
        fontWeight:'400',
        borderColor:'#fff',
        borderWidth:1,        
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:25,
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4287f5',
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:8,
        marginHorizontal:10,        
    },
    disBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4287f5',
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:8,
        marginHorizontal:10,
        opacity:0.7,
    },
    btnTxt:{
        fontSize:18,
        fontWeight:'700',
        color:'#fff',        
    },

})

export default Home