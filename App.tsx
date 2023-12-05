import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.birutua,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#B22727', // Change this to the color you want
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.ungumuda,
          }}>
          
          {/* Card for Profile Picture and Sections */}
          <View style={styles.cardContainer}>

            {/* Profile Picture */}
            <Image
              source={require('./peta/img.jpg')}
              style={styles.profilePicture}
            />

            {/* Sections */}
            <Section title="Balkish Adien Rachmay"></Section>
            <Text style={styles.text}> Mahasiswa semester 5 program studi Sistem Informasi Geografis Angakatan 2021. Aplikasi ini dibuat untuk menyelasikan tugas mata kulaih praktikum pemrograman geospasial perangkat bergerak lanjut</Text>
            

          

          <Section title=""></Section>
          <LearnMoreLinks />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  cardContainer: {
    alignItems: 'center',
    margin: 16,
    padding: 16,
    backgroundColor: '#fff', // Change this to the color you want for the card
    borderRadius: 8,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of the width and height to make it a circle
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 14,
    textAlign: 'center',
    }
});

export default App;
