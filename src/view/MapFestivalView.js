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
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 initialRegion={{
                   latitude: this.props.latitude,
                   longitude: this.props.longitude,
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
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});