import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from './components/ThemeContext';


export default function HomeScreen() {
  const { isDarkMode } = useTheme();


  const textColor = isDarkMode ? 'white' : '#1e1e2d';
  const backgroundColor = isDarkMode ? '#161622' : 'white';
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.header1}>
            <Image source={require("./assets/profile.png")} style={styles.profileImage} />
            <View>
              <Text style={[styles.greet, { color: isDarkMode ? "#7e848d" : "#7e848d" }]}>Welcome back,</Text>
              <Text style={[styles.title, { color: textColor }]}>Samuel Gyasi</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : "white" }]}>
            <Image source={require('./assets/search.png')} style={[styles.search, { tintColor: isDarkMode ? 'white' : null }]} />
          </View>
        </View>

        <View style={styles.cardCont}>
          <Image style={styles.card} source={require('./assets/Card.png')} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  greet: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    width: 24,
    height: 24,
  },
  cardCont: {
    alignItems: 'center',
  },
  card: {
    width: '90%',
    resizeMode: 'contain',
  },
  
});
