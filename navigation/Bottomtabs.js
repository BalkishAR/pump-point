import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen(){
    return (
        <ScrollView>
            <View style={styles.listitem}>
                <Image source={require('../peta/peta1.png')} style={styles.Image} />
                <Text style={styles.caption}>Peta Kemiringan Lereng DAS Paloh</Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/peta2.png')} style={styles.Image} />
                <Text style={styles.caption}>Peta Perwilayahan DAS Paloh</Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/peta3.png')} style={styles.Image} />
                <Text style={styles.caption}>Peta Orde Sungai DAS Paloh</Text>
            </View>
        </ScrollView>
    );
}
function MapsScreen(){
    return (
            <WebView
            source ={ webmap }/>
    );
}
function ProfileScreen(){
    return (
        <View>
            <Portofolio/>
        </View>
    );
}
function MahasiswaScreen(){
    return (
        <View>
            <Getjsonfile/>
        </View>
    );
}

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}  >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="house" color={color} size={size} />
        ),
    }}
    />
      <Tab.Screen name="Maps" component={MapsScreen}
      options={{
        tabBarLabel: 'Maps',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="map-location-dot" color={color} size={size} />
        ),
    }}
    />
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="user" color={color} size={size} />
        ),
    }}
    />
      <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
      options={{
        tabBarLabel: 'Mahasiswa',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome6 name="users" color={color} size={size} />
        ),
    }}
    />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs

const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 300,
        resizeMode: 'stretch'
    },
    listitem: {
        padding:20,
        alignItems: 'center',
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});