import Loading from '@/componentes/Loading';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cadastrarMaterial } from '../services/apiMaterial';

interface Material {
  nome: string;
  fase: string;
  unidade: string;
  quantidadeTotal: number;
  valorTotal: number;
  precoUnitario: number;
}

export default function GerenciarMateriais() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [fase, setFase] = useState('1 - Base');
  const [unidade, setUnidade] = useState('unid');
  const [quantidadeTotal, setQuantidadeTotal] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // simula carregamento por 2 segundos

  return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
}, []);

if (loading) {
  return <Loading />;
}

  const adicionarMaterial = () => {
    if (!nome || !quantidadeTotal || !valorTotal) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const quantidade = parseFloat(quantidadeTotal);
    const valor = parseFloat(valorTotal);

    if (isNaN(quantidade) || isNaN(valor)) {
      alert('Quantidade e valor devem ser números válidos.');
      return;
    }

    const precoUnitario = valor / quantidade;

    const novoMaterial: Material = {
      nome,
      fase,
      unidade,
      quantidadeTotal: quantidade,
      valorTotal: valor,
      precoUnitario,
    };

    setMateriais((prev) => [...prev, novoMaterial]);

    cadastrarMaterial({
      nome,
      fase,
      unidade,
      quantidadeTotal: quantidade.toString(),
      valorTotal: valor.toString(),
      precoUnitario: precoUnitario.toString(),
      instalado: false,
    });

    
    setNome('');
    setQuantidadeTotal('');
    setValorTotal('');
    setUnidade('unid');
    setFase('1 - Base');
  };

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total de Materiais: {materiais.length}</Text>
        <Text style={styles.summaryText}>
          Custo Total: R$ {materiais.reduce((acc, m) => acc + m.valorTotal, 0).toFixed(2)}
        </Text>
      </View>

  
      <Text style={styles.sectionTitle}>Adicionar Material</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Cimento (saco 50kg)"
        value={nome}
        onChangeText={setNome}
      />

      <Picker selectedValue={fase} style={styles.inputt} onValueChange={setFase}>
        <Picker.Item label="1 - Base" value="1 - Base" />
        <Picker.Item label="2 - Estrutura" value="2 - Estrutura" />
        <Picker.Item label="3 - Acabamento" value="3 - Acabamento" />
      </Picker>

      <Picker selectedValue={unidade} style={styles.inputt} onValueChange={setUnidade}>
        <Picker.Item label="unid" value="unid" />
        <Picker.Item label="m²" value="m²" />
        <Picker.Item label="kg" value="kg" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Quantidade, Ex: 10"
        keyboardType="numeric"
        value={quantidadeTotal}
        onChangeText={setQuantidadeTotal}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor Total, Ex: 35"
        keyboardType="numeric"
        value={valorTotal}
        onChangeText={setValorTotal}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={adicionarMaterial}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Materiais */}
      <Text style={styles.sectionTitle}>Lista de Materiais</Text>
      {materiais.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum material cadastrado ainda. Adicione o primeiro material.</Text>
      ) : (
        materiais.map((m, index) => (
          <View key={index} style={styles.materialItem}>
            <Text style={styles.materialText}>
              {m.nome} - {m.quantidadeTotal} {m.unidade} - R$ {m.valorTotal.toFixed(2)} 
              {' '} (R$ {m.precoUnitario.toFixed(2)}/{m.unidade})
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#efecec',
    padding: 16
     },
  summary: { 
    marginBottom: 20 
  },

  summaryText: {
     fontSize: 16, 
     fontWeight: 'bold', 
     color: '#080608' 
    },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 10,
     color: '#050404' 
    },
  input: { 
    backgroundColor: '#605e5e',
    color: '#000000', 
    padding: 10, 
    borderRadius: 8, 
    marginVertical: 5
   },
  inputt: { 
    backgroundColor: '#140d0d',
     color: '#64148d',
      padding: 10,
        borderRadius: 8,
          marginVertical: 5
      },
  buttonRow: { 
    flexDirection: 'row',
     justifyContent: 'space-between', 
     marginVertical: 10 ,

    },
  cancelButton: { 
    backgroundColor: '#cd1a1a', 
    padding: 12,
     borderRadius: 8,
      flex: 1,
       marginRight: 5
       },
  addButton: { 
    backgroundColor: '#27b42c',
     padding: 12,
      borderRadius: 8,
       flex: 1,
        marginLeft: 5 
      },
  buttonText: { 
    color: '#f1eded',
     textAlign: 'center', 
     fontWeight: 'bold'
     },
  emptyText: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 10 
  },
  materialItem: {
     backgroundColor: '#786c6c',
      padding: 10,
       borderRadius: 8,
        marginVertical: 5 
        
      },
  materialText: {
     fontSize: 14,
      color: '#ede9e9' 
    },
});
