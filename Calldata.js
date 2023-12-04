import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Callapi = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbwccvEPPB5S6lOF1ENnUo0hYCnvYfWggc_YZZfhsn-ImmaLIk8V2nTi0OwqjnDt0IQ_/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchText, setSearchText] = useState('');

  const fetchData = () => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();

    // Fetch data every 5 minutes (adjust the interval as needed)
    const intervalId = setInterval(() => {
      fetchData();
    }, 300000); // 300,000 milliseconds = 5 minutes

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleRefresh = () => {
    setRefresh(true);
    fetchData();
    setRefresh(false);
  };

  const filteredData = dataUser.filter(item =>
    item.nama.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <FontAwesome5 name="search" size={20} color="#333" style={styles.searchIcon} />
        </View>
      </View>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={filteredData}
            onRefresh={() => {
              handleRefresh();
            }}
            refreshing={refresh}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => {
                  Linking.openURL(`google.navigation:q=${item.latitude},${item.longitude}`);
                }}
                style={styles.linkContainer}
              >
                <View>
                  <View style={styles.card}>
                    <View>
                      <Text style={styles.cardtitle}>{item.nama}</Text>
                      <Text style={styles.tekskecil}>jenis: {item.jenis}</Text>
                      <Text style={styles.ulasan}>operasional: {item.operasional}</Text>
                      <Text style={styles.ulasan}>latitude: {item.latitude}</Text>
                      <Text style={styles.ulasan}>longitude: {item.longitude}</Text>
                    </View>
                    <View style={styles.directionIconContainer}>
                      <FontAwesome5 name="directions" size={20} color="#3081D0" />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Callapi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0F4FF', // Set your desired background color here
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#E0F4FF',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F4FF'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 8,
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF2E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
    justifyContent: 'space-between', // Align children in a row with space in between
  },
  tekskecil: {
    fontSize: 12,
  },
  ulasan: {
    fontSize: 12,
    color: 'gray',
  },
  directionIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
