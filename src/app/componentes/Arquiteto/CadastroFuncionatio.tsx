import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { funcionarios } from "../../services/FuncionarioApi";

export default function funcionario() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [sexo , setSexo] = useState('');
  const [idade, setIdade] = useState('');

 
const handlefuncionarios = async () => {

  if (!nome || !cargo || !sexo || !idade) {
    alert("Preencha todos os campos");
    return;
  }


  try {

    const data = await funcionarios(
      nome,
      cargo,
      sexo,
      parseInt(idade, 10)

    );

    if (data.success) {

      alert(data.message);

      router.push("/ArquitetoHome");

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
        placeholder="Cargo"
        value={cargo}
        onChangeText={setCargo}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
     

      <TouchableOpacity
        style={styles.button}
        onPress={handlefuncionarios}
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