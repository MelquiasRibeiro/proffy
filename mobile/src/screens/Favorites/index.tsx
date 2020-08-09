import React from 'react';
import { View,ScrollView } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
        <Header title="Seus Proffys
        Favoritos"/>
         <ScrollView style={styles.scrollView} 
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16,
        }}
        >
        <TeacherItem/>
        <TeacherItem/>
        </ScrollView>

    </View>
      
)}

export default Favorites;