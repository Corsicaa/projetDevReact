import React from "react";
import { SafeAreaView, Text, Alert, PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const Map = () => {

  return (
    <MapView
      onMapReady={() => {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).then(granted => {
          // Faire des alertes en fonction de la valeur de granted
          alert(granted)
        });
      }}
      style={styles.map}
      showsUserLocation={true}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default Map;