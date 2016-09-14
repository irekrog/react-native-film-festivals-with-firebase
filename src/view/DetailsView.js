import React, {Component} from 'react';
import {
  Text,
  Linking,
  StyleSheet,
  BackAndroid
} from 'react-native';

import {Container, Header, Title, Content, Button, Icon, List, ListItem} from 'native-base';

export default class Details extends Component {

  constructor(props) {
    super(props);
    this.navSecond = this.navSecond.bind(this);
    this.navThirdScreen = this.navThirdScreen.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.navSecond();
      return true;
    });
  }

  navSecond() {
    this.props.navigator.pop({
      activeScreen: 'detailsScreen'
    })
  }

  navThirdScreen() {
    this.props.navigator.push({
      activeScreen: 'mapFestival',
      mapData: {
        latitude: this.props.latitude,
        longitude: this.props.longitude
      }
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this.navSecond}>
            <Icon name='ios-arrow-back'/>
          </Button>
          <Title>
            Festival details
          </Title>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>{this.props.fullName}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.city}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.voivodeship}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.lastOpeningDate}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.openingDate}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.endingDate}</Text>
            </ListItem>
            <ListItem onPress={() => Linking.openURL(this.props.url)}>
              <Text style={styles.linkColor}>{this.props.url}</Text>
            </ListItem>
            <ListItem onPress={this.navThirdScreen}>
              <Text>Sprawdź lokalizację na mapie</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  linkColor: {
    color: '#1976D2',
    textDecorationLine: 'underline'
  }
});