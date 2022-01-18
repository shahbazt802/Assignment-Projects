import {Platform,PermissionsAndroid} from 'react-native'


const androidPermission=()=> new Promise(async,(resolv,reject)=>{


    try{

        if (Platform.OS==='android' && Platform.Version>22){


            const granted=await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_RESOURCES,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_RESOURCES
                

            ]);

            console.log(granted,'granted response')

        }
        if(
            granted['android.permission.CAMERA']!=='granted' ||
            granted['android.permission.WRITE_EXTERNAL_STORAGE']!=='granted' ||
            granted['android.permission.READ_EXTERNAL_STORAGE']!=='granted'){

                showError("Don't have required permission.Please allow permission")
                return resolv(false)
            }
            return resolv(true)

    }
    catch(e){
        return(false)

    }
})

export default androidPermission;