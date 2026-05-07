import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function MinhasObrasScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.title}>Minhas Obras</Text>
      <Text style={styles.subtitle}>Gerencie seus projetos de construção</Text>

      {/* Conteúdo central */}
      <View style={styles.emptyBox}>
        <Text style={styles.emptyText}>Nenhuma obra cadastrada</Text>
        <Text style={styles.emptySubText}>Comece criando seu primeiro projeto</Text>

        {/* Botão */}
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('./nova_obra')}>
          <Text style={styles.buttonText}>+ Nova Obra</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
  },
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    color: '#333',
  },
  emptySubText: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
