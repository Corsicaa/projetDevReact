import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const Register = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');


    //fonction pour récuperer un token
    const RegisterMeIn = async () => {
        //Verification des champs
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        if (password !== password2) {
            alert('Password must be the same');
            return;
        }
        navigation.navigate('Home');
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
                    <TextInputContainer>
                        <TextInputStyled
                            value={password2}
                            onChangeText={text => setPassword2(text)}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                        />
                    </TextInputContainer>
                    <LoginButton onPress={RegisterMeIn}>
                        <Text>Register</Text>
                    </LoginButton>
                </View>
            </View>
            <View>
                <LoginClick onPress={() => navigation.navigate('Login')}>
                    <Text>Already have an account ? Login in</Text>
                </LoginClick>
            </View>
        </SafeAreaViewStyled>
    );
};

//Utilisation des styled 

const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: papayawhip;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Welcome = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-top: 45%;
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

const LoginClick = styled.TouchableOpacity`
  align-items: center;
    margin-top: 20px;
`;

export default Register