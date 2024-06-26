import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Transactions from './components/Transactions';
import { useTheme } from './components/ThemeContext';

export default function HomeScreen() {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'white' : '#1e1e2d';
  const backgroundColor = isDarkMode ? '#161622' : 'white';

  const TransactionsList = [
    { id: '1', icon: require('./assets/apple.png'), title: 'Apple Store', subTile: 'Entertainment', amount: '-$125' },
    { id: '2', icon: require('./assets/spotify.png'), title: 'Spotify', subTile: 'Music', amount: '-$150' },
    { id: '3', icon: require('./assets/moneyTransfer.png'), title: 'Money Transfer ', subTile: 'Transaction', amount: '$1,998' },
    { id: '4', icon: require('./assets/grocery.png'), title: 'Glossary', subTile: 'Shopping', amount: '-$225' },
    // ... other transactions
  ];

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

        <View style={styles.icons}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : 'white' }]}>
              <Image source={require("./assets/send.png")} style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]} />
            </TouchableOpacity>
            <Text style={[styles.iconText, { color: textColor }]}>Send</Text>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : 'white' }]}>
              <Image source={require("./assets/recieve.png")} style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]} />
            </TouchableOpacity>
            <Text style={[styles.iconText, { color: textColor }]}>Receive</Text>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : 'white' }]}>
              <Image source={require("./assets/loan.png")} style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]} />
            </TouchableOpacity>
            <Text style={[styles.iconText, { color: textColor }]}>Loan</Text>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={[styles.iconbg, { backgroundColor: isDarkMode ? "#1e1e2d" : 'white' }]}>
              <Image source={require("./assets/topUp.png")} style={[styles.icon, { tintColor: isDarkMode ? 'white' : 'black' }]} />
            </TouchableOpacity>
            <Text style={[styles.iconText, { color: textColor }]}>Top Up</Text>
          </View>
        </View>

        <View style={styles.trans}>
          <Text style={[styles.tran, { color: textColor }]}>Transactions</Text>
          <Text style={styles.seemore}>See All</Text>
        </View>

        <FlatList
          data={TransactionsList}
          renderItem={({ item }) => (
            <Transactions
              transIcon={item.icon}
              title={item.title}
              subTile={item.subTile}
              amount={item.amount}
              iconStyle={{
                tintColor: isDarkMode && (item.icon === require('./assets/apple.png') || item.icon === require('./assets/moneyTransfer.png')) ? 'white' : null
              }}
              amountStyle={{
                color: item.icon === require('./assets/moneyTransfer.png') ? '#0066ff' : (isDarkMode ? 'white' : 'black')
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconbg: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
 
  iconText: {
    marginTop: 5,
    fontSize: 14,
  },
  trans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tran: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seemore: {
    color: '#0066ff',
    fontSize: 16,
  },
});
