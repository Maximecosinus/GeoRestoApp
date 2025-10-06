// Fichier: /src/screens/HomeScreen.js (Version CORRIGÉE)

import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapComponent from '../components/MapComponent';
// 1. Assurez-vous que BottomSheetView est bien importé
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import RestaurantDetailView from '../components/RestaurantDetailView';
import SearchResultsView from '../components/SearchResultsView';

export default function HomeScreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['15%', '85%'], []);
  
  const handleListItemPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
    // Bonus : Faire en sorte que le BottomSheet s'agrandisse quand on sélectionne un item
    bottomSheetRef.current?.snapToIndex(1); // 1 est l'index de '85%'
  };
  
  const handleBackPress = () => {
    setSelectedRestaurant(null);
    // Bonus : Faire en sorte que le BottomSheet se réduise quand on revient à la liste
    bottomSheetRef.current?.snapToIndex(0); // 0 est l'index de '15%'
  };

  return (
    <View style={styles.container}>
      <MapComponent />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        {/* 2. On enveloppe notre logique conditionnelle dans BottomSheetView */}
        <BottomSheetView style={styles.contentContainer}> 
          {selectedRestaurant ? (
            <RestaurantDetailView 
              restaurant={selectedRestaurant} 
              onBackPress={handleBackPress}
            />
          ) : (
            <SearchResultsView 
              onListItemPress={handleListItemPress}
            />
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  handleIndicator: {
    backgroundColor: '#dcdcdc',
    width: 60,
  },
  // 3. On remet ce style, qui est maintenant appliqué à BottomSheetView
  contentContainer: {
    flex: 1,
  }
});