import { StyleSheet } from "react-native";

const styles =   StyleSheet.create({
    container:{
        borderRadius:8,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e6e6fe',
        marginBottom:16,
        overflow:'hidden',
    },
    profile:{
        flexDirection:"row",
        alignItems:"center",
        padding:24
    },
    avatar:{
     width:64,
     height:64,
     borderRadius:32,
     backgroundColor:'#eee'
    },
    profileInfo:{
        marginLeft:16
    },
    name:{
        fontFamily:'Archivo_700Bold',
        color:'#32264d',
        fontSize:20
    },
    subject:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize: 12,
        marginTop:4
    },
    bio:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize: 14,
        marginHorizontal:24,
        lineHeight:24
    },
    footer:{
        backgroundColor:'#fafafc',
        padding:20,
        alignItems:"center",
        marginTop:24,
    },
    price:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize:14,
    },
    priceValue:{
    fontFamily:'Archivo_700Bold',
    color:'#8257e5',
    fontSize:16,
    },
    buttonsContainer:{
        flexDirection:"row",
        marginTop:16
    },
    favoriteButton:{
    backgroundColor:'#8257e5',
    alignItems:"center",
    justifyContent:'center',
    marginRight:8,
    borderRadius:8,
    height:56,
    width:56
    },
    favorited:{
    backgroundColor:'#e33d3d',
    },
    whatsappButton:{
    backgroundColor:'#04d361',
    alignItems:"center",
    justifyContent:'center',
    marginRight:8,
    borderRadius:8,
    height:56,
    flex:1,
    flexDirection:'row'
    },
    contactbunttonText:{
    fontFamily:'Archivo_700Bold',
    color:'#fff',
    fontSize:16,
    marginLeft:16,
    }
    
})

export default styles;
