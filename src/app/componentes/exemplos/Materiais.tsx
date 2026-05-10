import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
export default function GerenciarMateriais() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Gerenciar Materiais</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* User */}
      <Text style={styles.username}></Text>

      {/* Totais */}
      <View style={styles.totals}>
        <Text style={styles.totalText}>Total de Materiais: 0</Text>
        <Text style={styles.totalText}>Custo Total: R$ 0,00</Text>
      </View>

      {/* Lista */}
      <ScrollView style={styles.list}>
        <Text style={styles.listTitle}>Lista de Materiais</Text>
        <Text style={styles.emptyText}>Nenhum material cadastrado ainda.</Text>
        <TouchableOpacity style={styles.firstMaterialButton}>
          <Text style={styles.firstMaterialText}>Adicionar primeiro material</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A1B9A', // Roxo
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    marginLeft: 10,
  },
  addText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  totals: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  totalText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  firstMaterialButton: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  firstMaterialText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});