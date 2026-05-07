import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // nome do usuário já definido

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {username}!</Text>

      <TextInput
        style={styles.input}
        placeholder="Atualizar nome"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("../tela")}
      >
        <Text style={styles.buttonText}>Continuar como {username}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#8e8a8a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgb(121, 105, 156)",
    borderWidth: 1,
    borderColor: "#0e0e0e",
    textAlign: "center",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "#171616",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});