import {useEffect, useState} from 'react';
import {Linking, PermissionsAndroid} from 'react-native';
import GetLocation from 'react-native-get-location';

export default function useMaps() {
  const [location, setLocation] = useState<any>(null);

  const requestPermissionMaps = async () => {
    try {
      const granted: any = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      const isAllGranted = Object.keys(granted).every(
        key => granted[key] === 'granted',
      );

      if (isAllGranted) {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 6000,
        })
          .then(_location => {
            setLocation(_location);
          })
          .catch(err => {
            console.log('Error get location => ', err?.message);
          });
      }
    } catch (error: any) {
      console.log('Error granted => ', JSON.stringify(error));
    }
  };

  const onOpenSettings = () => {
    requestAnimationFrame(async () => {
      await Linking.openSettings();
    });
  };

  useEffect(() => {
    (async () => {
      await requestPermissionMaps();
    })();
  }, []);

  return {location, onOpenSettings};
}
