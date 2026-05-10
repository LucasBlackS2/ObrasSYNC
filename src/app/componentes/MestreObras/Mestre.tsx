
import { router } from 'expo-router';
import React from 'react';


import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GerenciarObra() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Adicionar Materiais</Text>
      <Text style={styles.subtitle}></Text>

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

      <View style={styles.tabContainer}>
        {['Materiais', 'Cronograma', 'Extras', 'Gráficos'].map((tab, index) => (
          <Text key={index} style={[styles.tab, tab === 'Materiais' && styles.activeTab]}>
            {tab}
          </Text>
        ))}
      </View>

      <TouchableOpacity style={styles.buttonPurple}>
        <Text style={styles.buttonText}onPress={() => router.navigate('/componentes/Arquiteto/Material')}>Adicionar Materiais</Text>
      </TouchableOpacity>

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

      <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>Nenhum material cadastrado</Text>
        <Text style={styles.emptyText}>
          Adicione materiais com valores para começar a gerenciar sua obra.
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonPurple}>
        <Text style={styles.buttonText}> Adicionar Materiais</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  progressBox: { backgroundColor: '#e0f0ff', padding: 15, borderRadius: 10 },
  progressLabel: { fontSize: 16, fontWeight: '600' },
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
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  tab: { fontSize: 14, color: '#888' },
  activeTab: { color: '#007bff', fontWeight: 'bold' },
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
  emptyTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  emptyText: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 5 },
});