import React,{useState,useEffect} from 'react';
import { View,Text,Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Landing from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import Heart from '../../assets/images/icons/heart.png';
import {RectButton} from 'react-native-gesture-handler'
import api from '../../services/api';

const  Home: React.FC = () => {
    const [connections,setConnections] =useState(0);


    useEffect(() => {
      api.get('/connections').then(response =>{
        setConnections(response.data.total)
    }  
    )
    .catch(error=>{
        console.log(error)
    }        
    )
      
    }, [connections])
    const {navigate} = useNavigation()
    
    function handlenavigatetogiveClasses(){
        navigate('GiveClass')
    }
    function handleNavigateToStudy(){
        navigate('study')
    }

  return( 
        <View style={styles.container} >
            <Image style={styles.Image} source={Landing}/>
            <Text style={styles.title}>
                Seja Bem-Vindo, {'\n'}
                <Text style={styles.titleBold}>
                    o que deseja fazer ?
                </Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button,styles.buttonSecodary]} onPress={handleNavigateToStudy}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText} >Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button,styles.buttonPrimary]} onPress={handlenavigatetogiveClasses}>
                    <Image source={giveClassIcon}/>
                    <Text style={styles.buttonText}>Ensinar</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>Total de {connections} conexoes{' '}<Image source={Heart}/></Text>
        </View>
    )
}

export default Home;