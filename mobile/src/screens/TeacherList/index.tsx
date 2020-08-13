import React,{useState,useEffect} from 'react';
import { View,ScrollView,Text, TextInput } from 'react-native';
import { RectButton,BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-community/async-storage";
import { Feather } from "@expo/vector-icons";

import styles from './styles';
import Header from '../../components/Header';
import TeacherItem, { Teacher }  from '../../components/TeacherItem';
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";

const TeacherList: React.FC = () => {
    const [subject,setSubject] = useState('')
    const [week_day,setWeekday] = useState('')
    const [time,setTime] = useState('')
    const [isFilterVisible, setIsFiltersVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    

    function loadFavorites() {
      AsyncStorage.getItem("favorites").then((response) => {
        if (response) {
          const favoritedTeachers = JSON.parse(response);
          const favoritedTeachersIds = favoritedTeachers.map(
            (teacher: Teacher) => {
              return teacher.id;
            }
          );
  
          setFavorites(favoritedTeachersIds);
        }
      });
    }
  
    useFocusEffect(() => {
      loadFavorites();
    });

    function handleToggleFiltersvisible() {
      setIsFiltersVisible(!isFilterVisible);
    }

    async function handelFiltersSubmit() {
      loadFavorites();
  
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
  
      setIsFiltersVisible(false);
      setTeachers(response.data);
    }
    return (
    <View style={styles.container}>
        <Header title="Proffys Disponíveis"
         headerRight={
          <BorderlessButton onPress={handleToggleFiltersvisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeekday(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handelFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
        </Header>
        <ScrollView style={styles.scrollView} 
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16,
        }}
        >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}

        </ScrollView>
    </View>
    
)}

export default TeacherList;