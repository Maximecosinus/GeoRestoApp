import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // Nous utilisons une fonction anonyme auto-invoquée pour pouvoir utiliser async/await
    (async () => {
      // 1. Demander la permission à l'utilisateur
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('La permission d\'accéder à la localisation a été refusée');
        return;
      }

      // 2. Récupérer la position GPS
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois

  return { location, errorMsg };
}