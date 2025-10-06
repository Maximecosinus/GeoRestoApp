// Fichier: /src/components/LocationListItem.js (Version mise à jour avec Pressable)

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'; // Importez Pressable

// Le composant reçoit maintenant une prop "onPress" en plus
export default function LocationListItem({ index, name, description, onPress }) {
  return (
    // Pressable est un conteneur de clic très robuste
    <Pressable 
        onPress={onPress} 
        // style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })} // Effet visuel au clic (optionnel)
    >
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.indexText}>{index}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12, // Augmenté un peu pour une meilleure zone de clic
    paddingHorizontal: 20,
    backgroundColor: 'white', // Important pour que la zone de clic soit bien définie
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  indexText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});