import React, { Component } from 'react'
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = (props) =>  <Text>Redes</Text>;

const AlbumsRoute = () => <Text>Perfil</Text>;

const RecentsRoute = () => <Text>Ajustes</Text>;

export default class CFooter extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'HomeScreen', title: 'Redes', icon: 'group' },
      { key: 'albums', title: 'Perfil', icon: 'face' },
      { key: 'recents', title: 'Ajustes', icon: 'tune' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    HomeScreen: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}