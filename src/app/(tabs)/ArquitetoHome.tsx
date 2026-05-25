
import { useRouter } from 'expo-router';
import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Funcionario {
  id: string;
  nome: string;
  cargo: string;
  sexo: string;
  foto: string;
}

export default function GerenciarObra() {
  const router = useRouter();
  const renderItem = ({ item }: { item: Funcionario }) => (
    <View style={styles.employeeCard}>
      <Image source={{ uri: item.foto }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.cargo}>{item.cargo}</Text>
        <Text style={styles.sexo}>{item.sexo}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Adicionar Materiais</Text>
      <Text style={styles.subtitle}>Gerencie seu cronograma e materiais.</Text>

      <View style={styles.progressBox}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '0%' }]} />
        </View>
        <Text style={styles.progressText}>0%</Text>
        <Text style={styles.progressDetails}>0 dias • 0/0 materiais</Text>
      </View>

      <View style={styles.subProgressContainer}>
        <View style={styles.subProgressBox}>
          <Text style={styles.subProgressLabel}>Progresso Temporal</Text>
          <Text style={styles.subProgressValue}>0%</Text>
        </View>
        <View style={styles.subProgressBox}>
          <Text style={styles.subProgressLabel}>Progresso Materiais</Text>
          <Text style={styles.subProgressValue}>0%</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total</Text>
          <Text style={styles.cardValue}>R$ 0.0k</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Comprado</Text>
          <Text style={styles.cardValue}>R$ 0.0k</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Instalado</Text>
          <Text style={styles.cardValue}>R$ 0.0k</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonPurple}
        onPress={() => router.push('/componentes/Arquiteto/CadastroFuncionatio')}
      >
        <Text style={styles.buttonText}>Cadastrar Funcionário</Text>
      </TouchableOpacity>

      <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>Funcionários Cadastrados</Text>
        <FlatList
          data={[]}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  progressBox: { backgroundColor: '#e0f0ff', padding: 15, borderRadius: 10 },
  progressBar: {
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginVertical: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007bff',
  },
  progressText: { fontSize: 16, fontWeight: 'bold', color: '#007bff' },
  progressDetails: { fontSize: 12, color: '#666' },
  subProgressContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 },
  subProgressBox: { width: '48%', backgroundColor: '#fff', padding: 10, borderRadius: 8 },
  subProgressLabel: { fontSize: 14, color: '#333' },
  subProgressValue: { fontSize: 16, fontWeight: 'bold', color: '#007bff' },
  buttonPurple: {
    backgroundColor: '#6c63ff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  cardContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  cardTitle: { fontSize: 14, color: '#333' },
  cardValue: { fontSize: 16, fontWeight: 'bold', color: '#007bff' },
  emptyBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  emptyTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  emptyText: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 5 },
  list: { width: '100%' },
  listContent: { paddingBottom: 10 },
  employeeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  foto: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cargo: { fontSize: 14, color: '#666' },
  sexo: { fontSize: 14, color: '#007bff' },
});
          