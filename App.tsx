/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('__YOUR_ACCESS_TOKEN_GOES_HERE');

const mapStyles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

const App = () => {
  const [coordinates] = useState([78.9629, 20.5937]);

  return (
    <View style={mapStyles.page} key="12 ">
      <View style={mapStyles.container}>
        <MapboxGL.MapView
          style={mapStyles.map}
          styleURL={MapboxGL.StyleURL.Street}>
          <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation
            key="pointAnnotation"
            id="pointAnnotation"
            coordinate={coordinates}>
            <View />
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default App;
