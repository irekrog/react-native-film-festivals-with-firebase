import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import ListFestivalView from './src/view/ListFestivalView';
import DetailsView from './src/view/DetailsView';
import MapFestivalView from './src/view/MapFestivalView';

class MainActivity extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{activeScreen: 'listScreen'}}
        renderScene={MainActivity.navigatorRenderScene}
      />
    );

  }
  static navigatorRenderScene(route, navigator) {

    

    switch (route.activeScreen) {
      case 'listScreen':
        return (
          <ListFestivalView
            navigator={navigator}
            title="listScreen"
          />);
      case 'detailsScreen':
        return (
          <DetailsView
            navigator={navigator}
            title="detailsScreen"
            fullName={route.filmData.fullName}
            city={route.filmData.city}
            voivodeship={route.filmData.voivodeship}
            lastOpeningDate={route.filmData.lastOpeningDate}
            openingDate={route.filmData.openingDate}
            endingDate={route.filmData.endingDate}
            url={route.filmData.url}
          />);
      case 'mapFestival':
        return(
          <MapFestivalView
            navigator={navigator}
            title='mapFestival'
             />
        )
    }
  }
}

AppRegistry.registerComponent('filmFestival', () => MainActivity);