import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8257e5',
      justifyContent: 'center',
      padding: 40,
    },
    Image:{
      alignSelf:"center",
    },
    title:{
    
      fontFamily: 'Poppins_400Regular',
      color:'#fff',
      fontSize:20,
      lineHeight:30,
      marginTop:60,
    },
    titleBold:{
      fontFamily:'Poppins_600SemiBold'
    },
    buttonsContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:40,
    },
    button:{
      width: '48%',
      height: 150,
      borderRadius: 8,
      padding:24,
      justifyContent:'space-between',
    },
    buttonPrimary:{
      backgroundColor: '#04D361'
    },
    buttonSecodary:{
      backgroundColor: '#9871F5',
    },
    buttonText:{
      fontFamily:'Archivo_700Bold',
      color:'#fff',
      fontSize:20
    },
    totalConnections:{
      marginTop:30,
      color:'#d4c2ff',
      fontSize:12,
      lineHeight:20,
      fontFamily: 'Poppins_400Regular',
    }
  });

export default styles;

  //Archivo_400Regular,
      //Archivo_700Bold,
      //Poppins_600SemiBold