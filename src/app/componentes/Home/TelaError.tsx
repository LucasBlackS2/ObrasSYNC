import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const router =useRouter()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da",
        },
        errorText: {
        fontSize: 24,
        fontWeight: "bold",
    color: "#721c24",   
  },
  instructionText: {
    fontSize: 16,
    color: "#721c24",
  },
   button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default function TelaErro() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.errorText}>Ops! Algo deu errado.</Text>

      <Text style={styles.instructionText}>Tente novamente mais tarde.</Text>

   <TouchableOpacity style={styles.button} onPress={() => router.back()}>
           <Text style={styles.buttonText}>Voltar</Text>
         </TouchableOpacity>
    </View>
  );
}
