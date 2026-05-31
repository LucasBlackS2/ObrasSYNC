import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";


interface Funcionario {
  id: string;
  nome: string;
  cargo: string;
  sexo: string;
  foto: string;
}

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
   
    const carregarFuncionarios = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/funcionarios`); 
  
        if (response.ok) {
          const data = await response.json();
          setFuncionarios(data);
        } else {
          Alert.alert("Erro", "Não foi possível carregar os funcionários.");
        }
      } catch (error) {
        Alert.alert("Erro", "Falha na comunicação com o servidor.");
      }
    };

    carregarFuncionarios();
  }, []);

  const renderItem = ({ item }: { item: Funcionario }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.foto }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.cargo}>{item.cargo}</Text>
        <Text style={styles.sexo}>{item.sexo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funcionários</Text>
      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4ff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#333" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  foto: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: "bold", color: "#333" },
  cargo: { fontSize: 14, color: "#666" },
  sexo: { fontSize: 14, color: "#007bff" },
});
