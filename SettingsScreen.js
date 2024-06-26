import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from './components/ThemeContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const textColor = isDarkMode ? 'white' : '#21212f';
  const backgroundColor = isDarkMode ? '#161622' : 'white';

  const settingsOptions = [
    { title: 'Language' },
    { title: 'My Profile' },
    { title: 'Contact Us' },
    { title: 'Change Password' },
    { title: 'Privacy Policy' },
  ];

  return (
    <View style={[styles.container, { backgroundColor }]}>  
      <Text style={[styles.heading, { color: textColor }]}>Settings</Text>
     
      {settingsOptions.map((option, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            styles.optionContainer, 
            { 
              backgroundColor, 
              borderBottomColor: isDarkMode ? '#232533' : 'transparent' 
            }
          ]}
        >
          <Text style={[styles.optionText, { color: textColor }]}>{option.title}</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? "#7e848d" : "#7e848d"} />
        </TouchableOpacity>
      ))}

      <View style={styles.optionContainer1}>
        <Text style={[styles.switchText, { color: textColor }]}>Theme</Text>
        <Switch
          trackColor={{ false: "#7e848d", true: "#1ce830f" }}
          thumbColor={isDarkMode ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    paddingBottom: 40,
  },
  switchText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderBottomWidth: 1, 
    borderBottomColor: '#7e848d',
  },
  optionContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
