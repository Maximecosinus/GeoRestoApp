// Fichier: /src/components/ActionButtons.js

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Un petit composant interne pour éviter la répétition
const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.button}>
    <Ionicons name={icon} size={24} color="#007AFF" />
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function ActionButtons() {
  return (
    <View>
      <TouchableOpacity style={styles.directionsButton}>
         <Text style={styles.directionsButtonText}>Directions</Text>
      </TouchableOpacity>
      <View style={styles.secondaryActionsContainer}>
        <ActionButton icon="call-outline" label="Call" />
        <ActionButton icon="bookmark-outline" label="Save" />
        <ActionButton icon="share-outline" label="Share" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  directionsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  directionsButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#007AFF',
    marginTop: 5,
    fontSize: 14,
  },
});