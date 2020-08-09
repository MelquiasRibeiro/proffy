import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
        <Header title="Seus Proffys
        Favoritos"/>
    </View>
      
)}

export default Favorites;