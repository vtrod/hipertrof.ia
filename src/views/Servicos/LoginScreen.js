import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const navigateToInicioScreen = () => {
    navigation.navigate('InicioScreen');
  };

  const handleForgotPassword = () => {
    console.log('Esqueci a senha');
  };
  Font.loadAsync({
    'CorporateSBold': require('../../../assets/fonts/CorporateSBold.otf'), // Ajuste o caminho para sua fonte
  });

  return (
    <KeyboardAvoidingView behavior={null} style={{ flex: 1 }}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigateToInicioScreen}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.appName}>
        <Text style={styles.blueText}>HIPERTROF</Text>
        <Text style={styles.orangeText}>.IA</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email ou nome de usuário"
        placeholderTextColor="#fff"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.passwordVisibilityIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120f25',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  appName: {
    position: 'absolute',
    top: 60,
    color: 'rgba(33, 33, 33, 0.9)',
    fontSize: 36,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#fff',
    fontSize:40,
  },
  orangeText: {
    color: '#FFA000',
    fontSize:40,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height:50,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    width:80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingLeft: 10,
    borderRadius: 10,
    color: '#fff',
  },
  passwordVisibilityIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginLeft: '5%', 
    marginTop: 30,
    marginBottom: 0,
    padding: 0,
  },
  forgotPasswordText: {
    color:'#FFA000',
    fontSize: 12,
    opacity:1,
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    width:'90%',
    borderRadius: 10,
    marginTop: 50,
    alignItems:'center'
  },

  loginButtonText: {
    color: '#FFA000',
    fontSize: 20,
    fontFamily: 'CorporateSBold',
  },
});

export default LoginScreen;
