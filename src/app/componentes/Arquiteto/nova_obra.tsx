import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NovaObra() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [dias, setDias] = useState('');
  const [tipo, setTipo] = useState('');

  const handleCriarObra = () => {
    if (nome ==='' || area ==='' || dias ==='' || tipo ==='') {
        alert('Atenção ,Preencha todos os campos antes de criar a obra.');
      return;
    }

    const areaNum = Number(area);
    const diasNum = Number(dias);

    if (Number.isNaN(areaNum) || Number.isNaN(diasNum) || areaNum <= 0 || diasNum <= 0) {
      alert('Atenção ,Informe área e dias válidos (números maiores que 0).');
      return;
    }

    alert('Sucesso ,Projeto criado!');

    router.push('./Material');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oque Voce Deseja Criar?</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Casa da Praia"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: 120"
        keyboardType="numeric"
        value={area}
        onChangeText={setArea}
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: 180"
        keyboardType="numeric"
        value={dias}
        onChangeText={setDias}
      />

      <Text style={styles.subtitle}>Tipo de Projeto</Text>
      {['Casa', 'Edifício', 'Projeto Diferente'].map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.option, tipo === item && styles.optionSelected]}
          onPress={() => setTipo(item)}
        >
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleCriarObra}>
        <Text style={styles.buttonText}>Criar Obra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  input: {
    backgroundColor: '#40a56f',
    color: '#333',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bf0f0f',
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: '#0066cc',
    backgroundColor: '#cce6ff',
  },
  optionText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});