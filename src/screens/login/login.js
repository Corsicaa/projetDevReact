import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //fonction pour récuperer un token
  const logMeIn = async () => {
    //Verification des champs
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    axios({
      method: 'post',
      url: 'https://login.hikkary.com/users/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then(async response => {
        await AsyncStorage.setItem('token', response.headers['x-access-token']);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaViewStyled>
      <View>
        <Welcome>Welcome to Fiesta App</Welcome>
        <View>
          <TextInputContainer>
            <TextInputStyled
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder="Username"
            />
          </TextInputContainer>
          <TextInputContainer>
            <TextInputStyled
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
            />
          </TextInputContainer>
          <LoginButton onPress={logMeIn}>
            <Text>Login</Text>
          </LoginButton>
        </View>
      </View>
    </SafeAreaViewStyled>
  );
};

const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: papayawhip;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Welcome = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-top: 50%;
  fontFamily: "Caveat";
`;

const LoginButton = styled.TouchableOpacity`
  background-color: palevioletred;
  padding: 12px;
  border-radius: 15px;
  margin-top: 15px;
  margin-left: 30%;
  margin-right: 30%;
  align-items: center;
`;

const TextInputContainer = styled.View`
  margin: 15px;
`;

const TextInputStyled = styled.TextInput`
  border: 2px solid palevioletred;
  padding: 12px;
  border-radius: 3px;
  color: black;
`;
export default Login