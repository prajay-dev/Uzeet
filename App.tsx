import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// 1. Importing dependencies
import SitumPlugin, {MapView, SitumProvider} from '@situm/react-native';
// Modify this import according to your project structure:
import requestPermission from './requestPermission';

// 2. Define Situm SDK credentials and building identifier
const SITUM_API_KEY =
  '9c8a624f729a861690825922a28b684faa7b40a66bb30107156fd475d904247f';
const SITUM_BUILDING_ID = '17940';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapview: {
    width: '100%',
    height: '100%',
  },
});

const Screen: React.FC = () => {
  // 3. Initialize the Situm SDK and start positioning
  useEffect(() => {
    //Initialize Situm and set credentials
    SitumPlugin.init();
    SitumPlugin.setApiKey(SITUM_API_KEY);
    // Set positioning configuration
    SitumPlugin.setConfiguration({useRemoteConfig: true});
    // Request necessary permissions to start positioning
    requestPermission()
      .then(() => {
        SitumPlugin.requestLocationUpdates();
      })
      .catch((e: any) => {
        console.log(`Permissions rejected: ${e}`);
      });

    // Stop positioning when unmounting component
    return () => SitumPlugin.removeLocationUpdates();
  }, []);

  // 4. Show the building cartography
  return (
    <MapView
      style={{...styles.mapview}}
      configuration={{
        buildingIdentifier: SITUM_BUILDING_ID,
        situmApiKey: SITUM_API_KEY,
      }}
      onPoiSelected={poi => {
        console.log(`Situm > wayfinding > Poi selected: ${poi.identifier}`);
      }}
      onLoad={(event: any) => {
        console.log('Map is ready now' + JSON.stringify(event));
      }}
    />
  );
};

const App = () => (
  <SafeAreaView style={{...styles.container}}>
    <SitumProvider>
      <Screen />
    </SitumProvider>
  </SafeAreaView>
);

export default App;
