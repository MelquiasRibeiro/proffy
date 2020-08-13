import React,{useState} from 'react';
import { View,ScrollView,AsyncStorage,Text} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import TeacherItem,{Teacher} from '../../components/TeacherItem';
import { useFocusEffect } from "@react-navigation/native";

const Favorites: React.FC = () => {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
      AsyncStorage.getItem("favorites").then((response) => {
        if (response) {
          const favoritedTeachers = JSON.parse(response);
  
          setFavorites(favoritedTeachers);
        }
      });
    }
  
    useFocusEffect(() => {
      loadFavorites();
    });
  return (
    <View style={styles.container}>
        <Header title="Seus Proffys
        Favoritos"/>
        { favorites? (<ScrollView style={styles.scrollView} 
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16,
        }}
        >
       {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
          );
        })}
        </ScrollView>):
        (<Text style={styles.message}>Você ainda não tem Proffys marcados como favorito :(</Text>)}
    </View>
      
)}

export default Favorites;