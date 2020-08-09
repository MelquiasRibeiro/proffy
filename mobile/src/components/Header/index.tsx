import React from 'react';
import { View,Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';
import backIcon from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps{
    title:string;
}

const Header: React.FC<HeaderProps> = ({title}) => {

    const {navigate} = useNavigation();

    function handleGoBack(){
        navigate('Home');
    }

  return( 
    <View style={styles.container}>  
        <View style={styles.topbar}>
            <BorderlessButton onPress={handleGoBack}>
                <Image source={backIcon} resizeMode='contain'/>
            </BorderlessButton>
            <Image source={logo} resizeMode='contain'/>
        </View>
    <Text style={styles.title}>{title}</Text>
    </View>
)}

export default Header;