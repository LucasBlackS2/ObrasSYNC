import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const route = useRoute();

  const handleLogin = () => {
    if (email === '' && senha === '') {
      alert('Login realizado com sucesso!');
       router.push('./explorer');
    } else { email!=='Teste@hotmail.com' || senha!=='1234'
      alert('Email ou senha inválidos');
    }
    if (email === '' || senha === '') {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>ObraSync</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail} />
        <TextInput
          style={styles.input}
          placeholder=" Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha} />

        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
         
        </View>
    
        <View >
          <TouchableOpacity style={styles.button} onPress={() => router.push('../cadastro')}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    color: '#d9e3e7',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#867f7f',
  },
  title: {
    backgroundColor: '#e07038',
    color: '#0c0706',
    fontSize: 30,
    padding: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor: '#ea9d45',
    borderWidth: 10,
    borderRadius: 200,
  },
  input: {
    height: 50,
    margin: 10,
    padding: 10,
    borderColor:'#b0bd93',
    textAlign: 'center',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#443c3c',
  },
   button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin:10,   
   },
  buttonText: {
    color: "#000000",
    fontSize: 16,

  },
});