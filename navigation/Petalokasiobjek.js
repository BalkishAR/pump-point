import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Calldata from '../Calldata';
import { Linking } from 'react-native';

const mymap = require('../peta/map.html');
const Tab = createBottomTabNavigator();

// Form input dari github pages
const forminput = 'https://balkishar.github.io/WebMap_PGPBL12/';

// Form web dari github pages
const webmap = 'https://balkishar.github.io/WebMap_PGPBL12/map.html';

function HomeScreen({ navigation }) {
  const goToMapsScreen = () => {
    navigation.navigate('Maps');
  };
  const goToSPBUScreen = () => {
    navigation.navigate('SPBU');
  };
  const mapsUri = () => {
    const latitude = '37.7749'; // Replace with your desired latitude
    const longitude = '-122.4194'; // Replace with your desired longitude
    const label = 'Custom Label'; // Optional, replace with your desired label
  
    const uri = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`;
  
    Linking.openURL(uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../peta/gas-station.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.text}>Whats up</Text>
        </View>
      </View>
  
      <View style={styles.upperButtonsContainer}>
        <View style={styles.upperButtons}>
        <TouchableOpacity style={styles.cardButton} onPress={goToMapsScreen}>
        <Image source={require('../peta/petrol.png')} style={styles.buttonIcon} />
            <Text style={styles.cardButtonText}>Pump Point</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.cardButton} onPress={goToSPBUScreen}>
           <Image source={require('../peta/spbu.png')} style={styles.buttonIcon} />
        <Text style={styles.cardButtonText}>Pump List</Text>
      </TouchableOpacity>
        </View>
      </View>
  
       <View style={styles.lowerButtonsContainer}>
      <View style={styles.lowerButtons}>
      <TouchableOpacity
          style={styles.cardButton}
          onPress={mapsUri}>
          <Image source={require('../peta/map.png')} style={styles.buttonIcon} />
          <Text style={styles.cardButtonText}>Maps</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button 4 pressed')}>
          <Image source={require('../peta/info.png')} style={styles.buttonIcon} />
            <Text style={styles.cardButtonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  
   }
   const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF2E5',
      flex: 1,
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 10,
      shadowOpacity: 70,
      alignSelf: 'flex-end',
    },
    textContainer: {
      marginLeft: 10,
    },
    helloText: {
      fontSize: 30,
      marginRight: 200,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 30,
      marginRight: 200,
      fontWeight: 'thin',
    },
  
    upperButtonsContainer: {
      backgroundColor: '#FFF2E5',
    },
    upperButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      color: '#006E7F',
    },
  
    lowerButtonsContainer: {
      backgroundColor: '#FFF2E5',
    },
    lowerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      color: '#006E7F',
    },
  
    cardButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A0E9FF',
      borderRadius: 10,
      padding: 10,
      margin: 5,
    },
    cardButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonIcon: {
      width: 90, // Adjust the width and height based on your icon size
      height: 90,
      marginRight: 10, // Adjust the margin based on your design
    },
  });
  


function MapsScreen() {
  return <WebView source={{ uri: webmap }} />;
}

function AddDataScreen() {
  return <WebView source={{ uri: forminput }} />;
}

function SPBUScreen() {
  return (
    <View>
      <Calldata />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFF2E5',
          tabBarInactiveTintColor: '#bbbbbb',
          tabBarStyle: { backgroundColor: '#B22727' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="house" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="map-location-dot" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="circle-plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SPBU"
          component={SPBUScreen}
          options={{
            tabBarLabel: 'Pump List',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="circle-user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
