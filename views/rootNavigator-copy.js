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



export default class rootNavigator extends React.Component {

  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];

    return (
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

      navigationBar={
        <Navigator.NavigationBar
        routeMapper={{

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
        }}

        style={{backgroundColor: 'gray'}}
        />
      }

      configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.FloatFromBottom}


        style={{padding: 100}}
        />
      );
    }

  }
