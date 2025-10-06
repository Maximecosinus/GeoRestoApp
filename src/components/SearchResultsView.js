// Fichier: /src/components/SearchResultsView.js (Version simplifiée)

import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LocationListItem from './LocationListItem';
import SearchBar from './SearchBar';

// ... (MOCK_DATA reste inchangé) ...
// Données factices (mock data) pour construire notre interface
const MOCK_DATA = [
  { id: '0', name: 'Jarrod Lindgren', description: 'Direct Security Developer' },
  { id: '1', name: 'Johnnie Steuber', description: 'Internal Response Engineer' },
  { id: '2', name: 'Adolph Ankunding', description: 'Future Solutions Assistant' },
  { id: '3', name: 'Donald Gusikowski', description: 'Customer Intranet Liaison' },
  { id: '4-photos', name: 'Carolyn Smith (With Photos)', description: 'Lead Identity Manager', photos: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1948&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    ] 
  },
  { id: '5', name: 'Paul Jones', description: 'Senior Usability Officer' },
];

export default function SearchResultsView({ onListItemPress }) {
  
  const renderItem = ({ item }) => (
    // ON NE MET PLUS TouchableOpacity OU Pressable ICI
    // On passe directement la fonction au composant enfant
    <LocationListItem
      index={item.id}
      name={item.name}
      description={item.description}
      // On passe la fonction de clic à la prop "onPress" de l'item
      onPress={() => {
        console.log("--- CLIC DÉTECTÉ dans SearchResultsView (via renderItem) ---");
        onListItemPress(item);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <BottomSheetFlatList
        data={MOCK_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    paddingBottom: 20,
  }
});