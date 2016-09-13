import React, {Component} from 'react';

import MapView from 'react-native-maps';

import {
	View,
	StyleSheet
} from 'react-native';


export default class MapFestivalView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var a = 5;
		return(



			<View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 54.5189,
            longitude: 18.5305,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

		);
	}
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 5
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});