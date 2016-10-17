'use strick';
//강의에서는 'react-native'에서 모두 가지고 온다.
import React, { Component } from 'react';
import {
  Navigator,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';


const styles = StyleSheet.create({

});

const routes = [
  {title: 'First Scene', index: 0},
  {title: 'Second Scene', index: 1},
];

const NavigationBarRouteMapper = {

  LeftButton: (route, navigator, index, navState) =>
  {
    if (route.index === 0) {
      return null;
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
        <Text>Back</Text>
        </TouchableHighlight>
      );
    }
  },
  RightButton: (route, navigator, index, navState) =>
  { return (<Text>Done</Text>); },
  Title: (route, navigator, index, navState) =>
  { return (<Text>Awesome Nav Bar</Text>); },
};

export default class rootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideNavigationBar: false };
  }

  render() {


    let navigationBar =(
      <Navigator.NavigationBar
      routeMapper={NavigationBarRouteMapper}

      />
    )

    return (
      //initialRoute와 initialRouteStack에서 받은 값이 앞으로 route변수가 된다.
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}

      renderScene={(route, navigator) =>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }

      navigationBar={this.state.hideNavigationBar? null: navigationBar}
      configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.FloatFromBottom}


        style={{padding: 100}}
        />
      );
    }

  }
