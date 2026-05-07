import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ConfirmarCodigo() {
  const router = useRouter();
  const [codigo, setCodigo] = useState('');

  const handleConfirmar = () => {
    if (codigo.trim() == "4321") {
      alert("Código correto. Redirecionando...");
      router.navigate("../cliente/Cliente");
    }
    else (codigo.trim() != "4321"); { 
      alert("Código incorreto. Tente novamente.");
      router.navigate("../Home/TelaError");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de Código</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o código"
        keyboardType="numeric"
        value={codigo}
        onChangeText={setCodigo}
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar</Text>
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
    paddingHorizontal: 10,
    padding: 10,
    marginBottom: 15,
    color: "#171616",
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
    fontWeight: "bold",
    fontSize: 16,
  },
});