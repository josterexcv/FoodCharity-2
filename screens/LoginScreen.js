import * as React from 'react';
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
        username:'',
        password:''
        }

    }
    render(){
        return(
        <View>
            <Text>Login Screen</Text>
            <TextInput
          style={styles.formTextInput}
          placeholder = {"username"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              username: Text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"password"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              password: Text
            })
          }}
        />
        </View>
        );
    }
}