import React from 'react';
import { View,Image,Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavorite from '../../assets/images/icons/unfavorite.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'


const TeacherItem: React.FC = () => {
  return (
      <View style={styles.container}>
          <View style={styles.profile}>
                <Image source={{uri:'https://avatars1.githubusercontent.com/u/54459438?s=460&u=c2061f845354acb7de04ba559c98c61bc93c735a&v=4'}}style={styles.avatar} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Melquais Ribeiro</Text>
                    <Text  style={styles.subject}>Matematica</Text>
                </View>
               
          </View>
          <Text style={styles.bio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    quam molestiae similique tenetur quis aspernatur dolor? 
                    laudantium neque quia.
          </Text>
          <View style={styles.footer}>
              <Text style={styles.price}>
                    preço/hora{'   '}
                    <Text style={styles.priceValue}>R$ 200,00</Text>
              </Text>
              <View style={styles.buttonsContainer}>
                  <RectButton style={[styles.favoriteButton,styles.favorited]}>
                    <Image /* source={heartOutlineIcon} */ source={unfavorite}/>
                  </RectButton>
                  <RectButton style={styles.whatsappButton}>
                      <Image source={whatsapp}/>
                      <Text style={styles.contactbunttonText}>Entrar em contato</Text>
                  </RectButton>
              </View>
          </View>
      </View>
  );
}

export default TeacherItem;