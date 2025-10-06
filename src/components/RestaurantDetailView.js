// Fichier: /src/components/RestaurantDetailView.js (Version mise à jour)

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionButtons from './ActionButtons';
import PhotoCarousel from './PhotoCarousel';

// 1. On supprime les MOCK_DETAIL_DATA d'ici

// 2. Le composant reçoit maintenant les props du parent
export default function RestaurantDetailView({ restaurant, onBackPress }) {
  // Données de secours si les photos ne sont pas fournies
  const photos = restaurant.photos || [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1948&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <View style={styles.container}>
      {/* 3. Ajout du bouton retour */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size={32} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.address}>{restaurant.description}</Text>
      </View>
      <PhotoCarousel photos={photos} />
      <ActionButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (les anciens styles restent les mêmes)
  container: { flex: 1, paddingTop: 10 }, // On ajoute un peu d'espace en haut
  header: {
    // L'ancienne valeur était paddingHorizontal: 20
    // On la divise pour gérer gauche et droite séparément
    paddingRight: 20,
    paddingLeft: 60, // <-- C'EST LA CORRECTION. Une marge généreuse à gauche.
    paddingVertical: 10,
  },
  name: { fontSize: 24, fontWeight: 'bold' },
  address: { fontSize: 16, color: '#666', marginTop: 5 },
  
  backButton: {
    position: 'absolute',
    top: 15, // On ajuste un peu pour l'alignement vertical
    left: 20,
    zIndex: 1, 
  },
});