import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const UserScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="UserScreen">
      <Drawer.Screen name="HIPERTROF.IA" component={UserScreenContent} />
    </Drawer.Navigator>
  );
};

const UserScreenContent = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');

  const handleGenerateTraining = () => {
    // Lógica para gerar o treino com IA
    console.log('Treino gerado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Ícone de menu */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        </TouchableOpacity>
        <Text style={styles.headerText}>Preencha o formulário abaixo:</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Peso (em kg)"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (DD-MM-YYYY)"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (em cm)"
          value={height}
          onChangeText={setHeight}
        />
      </View>
      <TouchableOpacity style={styles.gerarButton} onPress={handleGenerateTraining}>
        <Text style={styles.buttonText}>Gerar treino com IA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:100,

  },
  headerText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:5,
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFA000',
    fontSize: 20,
    fontFamily: 'CorporateSBold',
  },
  gerarButton: {
    backgroundColor: '#120f25',
    paddingVertical: 12,
    width:'100%',
    borderRadius: 10,
    marginTop: 10,
    alignItems:'center'
  },
});

export default UserScreen;
