import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import ListFestivalView from './src/view/ListFestivalView';
import DetailsView from './src/view/DetailsView';

class MainActivity extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{activeScreen: 'listScreen'}}
        renderScene={MainActivity.navigatorRenderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump}
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
    }
  }
}

AppRegistry.registerComponent('filmFestival', () => MainActivity);