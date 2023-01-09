import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';


const Events = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
  
    const handleSubmit = () => {
      // Validation du formulaire et envoi des données pour créer l'événement ici
    };
  
    return (
      <Container>
        <Title1>Créer un événement</Title1>
        <FormInput
          value={eventName}
          onChangeText={text => setEventName(text)}
          placeholder="Nom de l'événement"
        />
        <FormInput
          value={eventDate}
          onChangeText={text => setEventDate(text)}
          placeholder="Date de l'événement"
        />
        <FormInput
          value={eventLocation}
          onChangeText={text => setEventLocation(text)}
          placeholder="Lieu de l'événement"
        />
        <SubmitButton onPress={handleSubmit}>
        <Text>Créer l'événement</Text>
      </SubmitButton>
      </Container>
    );
};


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;
`;

const Title1 = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: palevioletred;
  margin-bottom: 16px;
`;

const FormInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-width: 1px;
  border-color: palevioletred;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  margin-bottom: 8px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  border-width: 1px;
  border-color: palevioletred;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
  margin-top: 16px;
`;

export default Events;