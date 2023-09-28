import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import useMaps from './useMaps';
import colors from '../../constants/colors';

export default function MapsScreen() {
  const {location, onOpenSettings} = useMaps();

  return (
    <SafeAreaView style={styles.container}>
      {location !== null ? (
        <MapView
          provider="google"
          style={styles.map}
          initialRegion={{
            latitude: location?.latitude ?? 0,
            longitude: location?.longitude ?? 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location?.latitude ?? 0,
              longitude: location?.longitude,
            }}
          />
        </MapView>
      ) : (
        <View style={styles.section}>
          <Text style={styles.text}>
            Oopss, app butuh akses lokasi untuk dapat menampilkan maps
          </Text>
          <Button
            title="Buka Pengaturan"
            color={colors.primary}
            onPress={onOpenSettings}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  section: {
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
});
