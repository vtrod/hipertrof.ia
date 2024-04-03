import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Picker } from '@react-native-picker/picker'; // Importe Picker do novo pacote

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
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [injuryHistory, setInjuryHistory] = useState('');
  const [trainingAvailability, setTrainingAvailability] = useState('');
  const [equipmentAvailable, setEquipmentAvailable] = useState('');
  const [specificGoals, setSpecificGoals] = useState('');
  const [exercisePreferences, setExercisePreferences] = useState('');
  const [selectedAge, setSelectedAge] = useState(''); // idade selecionada
  const ages = Array.from(Array(89), (_, i) => i + 12); // Lista de idades de 12 a 100 anos

  const handleGenerateTraining = () => {
    // Lógica para gerar o treino com IA
    console.log('Treino gerado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            placeholder="Altura (em cm)"
            value={height}
            onChangeText={setHeight}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Idade:</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedAge}
              onValueChange={(itemValue) => setSelectedAge(itemValue)}
            >
              <Picker.Item label="Selecione sua idade" value="" />
              {ages.map((age) => (
                <Picker.Item key={age} label={`${age} anos`} value={age} />
              ))}
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Sexo"
            value={sex}
            onChangeText={setSex}
          />
          <TextInput
            style={styles.input}
            placeholder="Nível de condicionamento físico atual"
            value={fitnessLevel}
            onChangeText={setFitnessLevel}
          />
          <TextInput
            style={styles.input}
            placeholder="Histórico de lesões"
            value={injuryHistory}
            onChangeText={setInjuryHistory}
          />
          <TextInput
            style={styles.input}
            placeholder="Disponibilidade de tempo para treinar (dias por semana e tempo por sessão)"
            value={trainingAvailability}
            onChangeText={setTrainingAvailability}
          />
          <TextInput
            style={styles.input}
            placeholder="Equipamento disponível"
            value={equipmentAvailable}
            onChangeText={setEquipmentAvailable}
          />
          <TextInput
            style={styles.input}
            placeholder="Objetivos específicos de hipertrofia"
            value={specificGoals}
            onChangeText={setSpecificGoals}
          />
          <TextInput
            style={styles.input}
            placeholder="Preferências de exercício"
            value={exercisePreferences}
            onChangeText={setExercisePreferences}
          />
        </View>
        <TouchableOpacity style={styles.gerarButton} onPress={handleGenerateTraining}>
          <Text style={styles.buttonText}>Gerar treino com IA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:0,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 0,
    paddingLeft:15,
  },
  inputLabel: {
    marginRight: 10,
    color: '#000',
    fontSize: 16,
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
  picker: {
    flex: 1,
    height: 10,
  },
});

export default UserScreen;
