import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Profile = ({ navigation }) => {
    return (
        // AJouter input pour crée profile : Nom, Prénom, Age, Sexe, Ville, Pays, Email...
        <Container>
            <View>
                <Text1>Your Profile</Text1>
                <Text>En cours de développement :)</Text>
            </View>
        </Container>
    );
}

const Text1 = styled.Text`
    margin-top: 50px;
    font-size: 30px;
    color: #db7093;
    text-align: center;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;
`;

export default Profile;