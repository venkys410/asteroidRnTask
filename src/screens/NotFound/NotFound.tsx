import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const NotFound = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/failure.jpg')} style={styles.errorImg}/>
      <Text style={styles.txt}>Check Asteroid Id</Text>
      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>Home</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  txt:{
    color:'red',
    fontSize:25,
    fontWeight:'bold'
  },
  errorImg:{
    height:'50%',
    width:'100%',
  },
  btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4287f5',
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:8,
        marginVertical:10,        
    },
    btnTxt:{
        fontSize:18,
        fontWeight:'700',
        color:'#fff',        
    },
})

export default NotFound