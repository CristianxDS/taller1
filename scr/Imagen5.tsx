import React from 'react'
import { StyleSheet, View } from 'react-native'

const Imagen5 = () => {
  return (
    <View style={styles.container}> 
    <View style={styles.boxpurple}></View> 
    <View style={styles.boxOrange}></View> 
    <View style={styles.boxGreen}></View> 
        </View> 
  )
}
const styles=StyleSheet.create({ 
    container:{ 
        flex:1, 
        width:400, 
        height:500, 
        justifyContent:'center', 
        backgroundColor:'red', 
        marginTop:50, 
        
       // alignItems:'flex-end', 
        position:'absolute', 
        alignItems:'center',
        flexWrap:'wrap',
    }, 
    boxpurple:{ 
        //flex:1, 
        width:100, 
        height:100, 
        backgroundColor:'blue', 
        borderWidth:10, 
        borderColor:'white', 
       position:'relative', 
       //top:0, 
      // right:0, 
       alignSelf:'flex-start'
  
  
    }, 
    boxOrange:{ 
        width:100, 
        height:100, 
        backgroundColor:'orange', 
        borderWidth:10, 
        borderColor:'white', 
        //flex:1, 
        left:0,
       // alignSelf:'flex-end', 
       //position:'absolute' 
        //top:130 
        alignSelf:'center'
  
    }, 
    boxGreen:{ 
        width:100, 
        height:100, 
        backgroundColor:'green', 
        borderWidth:10, 
        borderColor:'white', 
       position:'relative', 
       //top:0, 
       //right:0, 
       alignSelf:'flex-start',
       bottom:0
        
  
    } 
    });
export default Imagen5
