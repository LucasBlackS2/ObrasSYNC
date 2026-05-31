import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { cadastrarUser } from "../services/cadastroApi";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 
const handleCadastro = async () => {

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos");
    return;
  }


  try {

    const data = await cadastrarUser(
      nome,
      email,
      senha
    );

    if (data.success) {

      alert(data.message);

      router.push("/componentes/Arquiteto/nova_obra");

    } else {

      alert(data.message || "Erro ao cadastrar");
    }

  } catch (error) {

    console.error(error);

    alert("Erro de conexão com o servidor");
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
    backgroundColor: '#0d0d0d',
  },
  title: {
    fontSize: 24,
    color:"#f4efef",
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    margin: 10,
    padding: 10,
    borderColor: "#7a9d2d",
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#110f0f",
    color: "#eee9e9",
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