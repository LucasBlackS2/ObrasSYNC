import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert} from "react-native";
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');


  const handleCadastro = async () => {
  if (cpf === '' || nome === '' || email === '' || senha === '' || confirmarSenha === '' || telefone === '') {
    alert('Erro, Por favor, preencha todos os campos.');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('Erro, As senhas não coincidem.');
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/usuarios/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cpf, nome, email, senha, telefone }),
    });

    if (response.ok) {
      alert("Sucesso, Cadastro realizado com sucesso!");
      router.navigate('/componentes/Arquiteto/Login');
    } else {
      alert("Erro ao cadastrar usuário.");
    }
  } catch (error) {
    alert("Erro de conexão com servidor.");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />
    

      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastro}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                 <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#8e8a8a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgb(121, 105, 156)',
    borderWidth: 1,
    borderColor: '#0e0e0e',
    textAlign: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    padding: 10,
    marginBottom: 15,
    color: '#171616',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin:10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});