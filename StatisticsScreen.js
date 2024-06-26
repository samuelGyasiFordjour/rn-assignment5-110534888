import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from './components/ThemeContext';

const StatisticsScreen = () => {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'white' : '#1e1e2d';
  const backgroundColor = isDarkMode ? '#161622' : 'white';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text style={[styles.text, { color: textColor }]}>Statistics Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});