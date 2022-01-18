import React,{useState} from "react";
import {View,StyleSheet,Text,Button, Alert,Platform} from 'react-native';
 import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import axios from "axios";
import apiRequest from './api/apiRequest'

//import ImagePicker from 'react-native-image-picker'
import {sha256} from 'react-native-sha256'






const UploadImages= ()=>{
   const [res,setres]=useState([])
   
    
   
   

    const onSelectImage=()=>{
    ImagePicker.openPicker ({
        width:300,
        height:400,
        cropping:true
    }).then(image=>{
        console.log(image)

        const imgPath=image.path
        imageUpload(imgPath)


    });


    

     
}
    
// uploading images
 const imageUpload=   (imgPath)=>{
     const imgData=new FormData()
     imgData.append({
         uri:imgPath,
         name:'image.png',
         fileName:'image',
         type:'image/jpg'
     })
     sha256(imgPath).then(hash=>{
        console.log(hash)
    })

     
    
    // api call

     axios({
         method:'post',
         url:' http://localhost:3000/file',
         data:imgData
     }).then(function (response){
         console.log('response',JSON.stringify(response.data))
     }).catch(function (error){
         console.log("error",error)
     })

    

     
     


     
       
    }   
    return(

        <View style={styles.uiStyles}>

            <Button title="Pick Images"
             onPress={onSelectImage}/>
           
            <Text></Text>
            
        </View>
    )
}

const styles=StyleSheet.create({

    uiStyles:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})

export default UploadImages;