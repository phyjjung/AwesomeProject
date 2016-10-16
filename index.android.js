/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *ㅇ요거 추가해서 함 보자고.ㄴ
 */
'use strick';
//강의에서는 'react-native'에서 모두 가지고 온다.
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import RootNavigator from './views/rootNavigator';

class AwesomeProject extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <RootNavigator ref="rootNavigator" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
});

// 강의에서는 react.AppRegistry 인데 이게 먹히지 않고 아래와 같이 해야함.
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
