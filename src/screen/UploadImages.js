import React,{useState} from "react";
import {View,StyleSheet,Text,Button, Alert,Platform} from 'react-native';
 import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import axios from "axios";
import apiRequest from './api/apiRequest'

//import ImagePicker from 'react-native-image-picker'
import {sha256} from 'react-native-sha256'






const UploadImages= ()=>{
   const [res,setres]=useState("")
   
    
   
   

    const onSelectImage=()=>{
    ImagePicker.openPicker ({
        width:300,
        height:400,
        cropping:true
    }).then(image=>{
        console.log(image)

        const imgPath=image.path
        alert('Image upload succesfully')
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
        setres(hash)
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
            <Text style={styles.textstyle}>
                Sha-256
            </Text>
            <Text style={styles.shatext}>
                {res}            </Text>
            
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
    ,
    textstyle:{
        marginTop:10,
        fontSize:20

    },
    shatext:{
        
        margin:20,
        fontSize:20
    }
})

export default UploadImages;