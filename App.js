import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CardsScreen from './CardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingsScreen';
import { ThemeProvider, useTheme } from './components/ThemeContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: isDarkMode,
        colors: {
          background: isDarkMode ? '#27273a' : '#ffffff',
          card: isDarkMode ? '#27273a' : '#ffffff',
          text: isDarkMode ? '#ffffff' : '#000000',
          border: isDarkMode ? '#27273a' : '#ffffff',
          notification: '#0066ff',
        },
      }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'My cards':
                iconName = focused ? 'card' : 'card-outline';
                break;
              case 'Statistics':
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0066ff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#27273a' : '#ffffff',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="My cards" component={CardsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
