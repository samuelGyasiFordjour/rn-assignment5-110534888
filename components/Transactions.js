import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useTheme } from './ThemeContext';

const Transactions = ({ transIcon, title, subTile, amount, iconStyle, amountStyle }) => {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? '#161622' : 'white';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : 'white' }]}>
        <Image source={transIcon} style={[styles.icon, iconStyle]} />
      </View>
      <View style={styles.details}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        <Text style={[styles.subTitle, { color: isDarkMode ? '#7e848d' : 'gray' }]}>{subTile}</Text>
      </View>
      <Text style={[styles.amount, amountStyle]}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
   
  },

  iconbg: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 10, 
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transactions;
