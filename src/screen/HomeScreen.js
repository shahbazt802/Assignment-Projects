import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';


const HomeScreen=(props)=>{


    return(

        <View style={styles.uiStyles}>
            

            <Button title="UploadImages"
              onPress={()=>props.navigation.navigate('Uploaded')}
              
              
              />
        </View>
    )
}

const styles=StyleSheet.create({

    uiStyles:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})

export default HomeScreen;