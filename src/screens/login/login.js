import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

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
    // navigation.navigate('Login');
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
      <View>
        <RegisterClick onPress={() => navigation.navigate('Register')}>
          <Text>Don't have an account ? Register here</Text>
        </RegisterClick>
      </View>
    </SafeAreaViewStyled>
  );
};

const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: papayawhip;
  width: 100%;
  height: 100%;
`;

const Welcome = styled.Text`
  font-size: 24px;
  text-align: center;
  margin: 10px;
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
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: palevioletred;
  padding: 12px;
  border-radius: 12px;
  color: white;
`;

const RegisterClick = styled.TouchableOpacity`
  align-items: center;
  margin-top: 20px;
`;

export default Login