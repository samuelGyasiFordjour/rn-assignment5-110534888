import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from './components/ThemeContext';

const CardsScreen = () => {
  const { isDarkMode } = useTheme();
  
  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? '#161622' : 'white';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Cards Screen</Text>
    </View>
  );
}

export default CardsScreen;

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
  },
});
