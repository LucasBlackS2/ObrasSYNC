import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { funcionarios } from "../../services/FuncionarioApi";

export default function Funcionario() {
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

      <Text style={styles.label}>Sexo</Text>
      <View style={styles.sexoContainer}>
        <TouchableOpacity
          style={[styles.sexoButton, sexo === "MASCULINO" && styles.sexoSelecionado]}
          onPress={() => setSexo("MASCULINO")}
        >
          <Text style={styles.sexoText}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sexoButton, sexo === "FEMININO" && styles.sexoSelecionado]}
          onPress={() => setSexo("FEMININO")}
        >
          <Text style={styles.sexoText}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
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
    backgroundColor: '#0a0909',
  },
  title: {
    color: '#f3ebeb',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#f3ebeb',
    fontSize: 18,
    marginBottom: 10,
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
    backgroundColor: "#0b0b0b",
    color: "#eae4e4",
  },
  sexoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  sexoButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#7a9d2d",
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#0b0b0b",
  },
  sexoSelecionado: {
    backgroundColor: "#007AFF",
  },
  sexoText: {
    color: "#fff",
    fontWeight: "bold",
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
