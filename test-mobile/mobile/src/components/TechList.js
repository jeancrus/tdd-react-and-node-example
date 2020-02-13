import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  const [tech, setTech] = useState('');
  const [newTech, setNewTech] = useState([]);

  function addNewTech() {
    setNewTech([...newTech, tech]);
    setTech('');
  }

  return (
    <View>
      <TextInput
        testID="tech-input"
        value={tech}
        onChangeText={e => setTech(e)}
      />
      <Button onPress={addNewTech}>
        <Text>Adicionar</Text>
      </Button>
      {newTech.map(techs => (
        <Text key={techs}>{techs}</Text>
      ))}
    </View>
  );
}
