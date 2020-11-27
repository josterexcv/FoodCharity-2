import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator ({
  LoginScreen : LoginScreen,
  SignupScreen : SignupScreen
})

const AppContainer = createAppContainer (SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
