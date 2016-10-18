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
  navBar: {
      backgroundColor: "rgb(42, 55, 68)",
      borderBottomColor: "rgba(255,255,255,0.5)",
      borderBottomWidth: 1,}
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

//routeMapper의 역할은 navigationBar의 버튼 타이틀을 지정한다.
    let navigationBar =(
      <Navigator.NavigationBar
      routeMapper={NavigationBarRouteMapper}
 style={styles.navBar}
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
//여기서 hideNavigationBar를 보여주냐  마냐를 정하는 이유는 로그인 같은 페이지에서는 필요가 없어서임.
      navigationBar={this.state.hideNavigationBar? null: navigationBar}
      configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.FloatFromBottom}


        style={{padding: 100}}
        />
      );
    }

  }
