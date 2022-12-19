import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components";

const Profile = ({ navigation }) => {
    return (
        // AJouter input pour crée profile : Nom, Prénom, Age, Sexe, Ville, Pays, Email...
        <SafeAreaView>
            <Text1>Your Profile</Text1>
        </SafeAreaView>
    );
}

const Text1 = styled.Text`
    margin-top: 50px;
    font-size: 30px;
    color: #db7093;
    text-align: center;
`;

export default Profile;