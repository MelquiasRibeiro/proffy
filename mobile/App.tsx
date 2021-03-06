import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './src/routes/appStack';
import {AppLoading} from 'expo'
import { Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo';
import  {Poppins_400Regular,Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

if(!fontsLoaded){
  return <AppLoading/>
}else{

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent"translucent/>
    <AppStack/>
  </>
  );
}
}