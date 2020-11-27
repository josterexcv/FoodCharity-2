import * as React from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class SignupScreen extends React.Component{
    constructor(){
        super();
        this.state={
        phoneNumber:'',
        address:'',
        firstName:'',
        lastName:'',
        username:'',
        password:''
        }

    }
    render(){
        return(
          <KeyboardAvoidingView style ={{alignItems:"center",marginTop:20}}>
        <View style={styles.containor}>
          <Image
          style={styles.logo}
          source={require("../assets/CHARITYFOOD.png")}
          />
            <Text>Signup Screen</Text>
            <TextInput
          style={styles.formTextInput}
          placeholder = {"phoneNumber"}
          maxLength = {15}
          onChangeText={(text)=>{
            this.setState({
              phoneNumber: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"address"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"firstName"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"lastName"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"username"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              username: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"password"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        
       <TouchableOpacity
       style={styles.submit}
       onPress={this.onPress}
       >
        <Text>Submit</Text>
       </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
        );
    }
}