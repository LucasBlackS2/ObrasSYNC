import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function SolicitarMaterial() {
  const [nome, setNome] = useState('');
  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleEnviar = () => {
    alert(`Solicitação enviada!\nNome: ${nome}\nMaterial: ${material}\nQtd: ${quantidade} ${unidade}\nPreço Unitário: R$ ${preco}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Área dos Funcionários</Text>
      <Text style={styles.subheader}>Gerenciar Materiais</Text>

      <Text style={styles.title}>Solicitar Material</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: João Silva"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: Areia Fina"
        value={material}
        onChangeText={setMaterial}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Ex: 10"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Ex: m³, kg, unid"
          value={unidade}
          onChangeText={setUnidade}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Ex: 85.00"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar Solicitação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8e6', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#d35400' },
  subheader: { fontSize: 14, color: '#888', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%' },
  button: {
    backgroundColor: '#f39c12',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});