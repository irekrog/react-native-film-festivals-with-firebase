import React, {Component} from 'react';
import {
  Text,
  ListView
} from 'react-native';

import {Container, Content, List, ListItem, Header, Title} from 'native-base';

export default class ListFestival extends Component {

  constructor(props) {
    super(props);

    this.navFirst = this.navFirst.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  renderList(rowData) {
    return (
      <ListItem button onPress={() => this.navFirst(rowData)}>
        <Text>{rowData.full_name}</Text>
      </ListItem>
    );
  }

  navFirst(rowData) {
    this.props.navigator.push({
      activeScreen: 'detailsScreen',
      filmData: {
        fullName: rowData.full_name,
        city: rowData.city,
        voivodeship: rowData.voivodeship,
        url: rowData.url,
        lastOpeningDate: rowData.last_opening_date,
        openingDate: rowData.opening_date,
        endingDate: rowData.ending_date
      }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            Film Festivals
          </Title>
        </Header>
        <Content>
          <List dataArray={this.props.data}
                renderRow={this.renderList}/>
        </Content>
      </Container>
    );
  }
}