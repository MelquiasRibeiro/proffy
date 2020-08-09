import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './styles';
import background from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  return (<View style={styles.container}>
            <ImageBackground resizeMode="contain" source={background} style={styles.content}>

            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>Para Começar você precisa se cadastrar na nossa plataforma web</Text>
            </ImageBackground>
            <RectButton onPress={handleGoBack} style={styles.okButton}>
              <Text style={styles.textButton}>Tudo Bem</Text>
            </RectButton>
        </View>);
}

export default GiveClasses;