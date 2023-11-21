// SearchScreen.js

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface SearchScreenProps {
  navigation: any; // unsure of type so far
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff', // Background color for the menu
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuItem: {
    color: '#007BFF', // Adjust the color to your preference
  },
});

const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for jobs..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {/* Other content related to job search results can be added here */}

      {/* Bottom Navigation Menu */}
      <View style={styles.bottomMenu}>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate('FindJobs')}>
          Find Jobs
        </Text>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate('MyJobs')}>
          My Jobs
        </Text>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}>
          Profile
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;
