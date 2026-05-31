import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginUsuario } from "../../services/api";

export interface LoginProps {}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      const data = await loginUsuario(email, senha);

      if (data.success) {
        alert(data.message);
        router.push("/ArquitetoHome");
      } else {
        alert(data.message || "Email ou senha inválidos");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor");
      router.push("/componentes/Home/TelaError");
    }
  };

  return (
   

    <View style={styles.container}>
      <View style={styles.header}>
             <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
               <Text style={styles.backText} >←</Text>
             </TouchableOpacity>
             </View>
      <Text style={styles.title}>ObrasSync</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/componentes/cadastro")}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000",
  },
  title: {
    backgroundColor: "#b75321",
    color: "#0c0706",
    fontSize: 30,
    padding: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "#fbfaf9",
    borderWidth: 10,
    borderRadius: 200,
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
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
   header: {

    alignItems: 'center',
   
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
    borderRadius: 5,
    marginEnd: 'auto',

  },
  backText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
