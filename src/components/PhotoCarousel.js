// Fichier: /src/components/PhotoCarousel.js (Version Finale)

import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';
import { PanGestureHandler as RNGHPanGestureHandler, State } from 'react-native-gesture-handler';

const { width: screenWidth } = Dimensions.get('window');
const IMAGE_WIDTH = screenWidth * 0.7; // Chaque image prend 70% de la largeur
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.6;
const HORIZONTAL_MARGIN = 10; // Marge entre les images

export default function PhotoCarousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const itemWidth = IMAGE_WIDTH + HORIZONTAL_MARGIN * 2;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationX, velocityX } = event.nativeEvent;
      
      // Déterminer la direction du swipe
      if (translationX < -50 || velocityX < -500) {
        // Swipe vers la gauche - image suivante
        if (currentIndex < photos.length - 1) {
          setCurrentIndex(currentIndex + 1);
          Animated.spring(translateX, {
            toValue: -(currentIndex + 1) * itemWidth,
            useNativeDriver: true,
          }).start();
        } else {
          // Retour à la position actuelle
          Animated.spring(translateX, {
            toValue: -currentIndex * itemWidth,
            useNativeDriver: true,
          }).start();
        }
      } else if (translationX > 50 || velocityX > 500) {
        // Swipe vers la droite - image précédente
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          Animated.spring(translateX, {
            toValue: -(currentIndex - 1) * itemWidth,
            useNativeDriver: true,
          }).start();
        } else {
          // Retour à la position actuelle
          Animated.spring(translateX, {
            toValue: -currentIndex * itemWidth,
            useNativeDriver: true,
          }).start();
        }
      } else {
        // Retour à la position actuelle
        Animated.spring(translateX, {
          toValue: -currentIndex * itemWidth,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNGHPanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={styles.carouselContainer}>
          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [{ translateX }],
              },
            ]}
          >
            {photos.map((photo, index) => (
              <Image
                key={`${photo}-${index}`}
                source={{ uri: photo }}
                style={styles.image}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </RNGHPanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: IMAGE_HEIGHT,
    marginTop: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  carouselContainer: {
    height: IMAGE_HEIGHT,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 12,
    marginHorizontal: HORIZONTAL_MARGIN,
  },
});