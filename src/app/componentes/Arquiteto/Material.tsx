import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const router = useRouter();
const adicionarMaterial = async () => {
  try {
    const response = await axios.post("jdbc:h2:tcp://localhost:8080/Material", {
      nome: "",
      valor: "",
      instalado: false
    });
    console.log("Material adicionado:", response.data);
  } catch (error) {
    console.error(error);
  }
};
const listarMateriais = async () => {
  try {
    const response = await axios.get("jdbc:h2:tcp://localhost:8080/Material");
    console.log("Materiais:", response.data);
  } catch (error) {
    console.error(error);
  }
};
interface Material {
  nome: string;
  fase: string;
  unidade: string;
  quantidadeTotal: string;
  valorTotal: string;
  precoUnitario: string;
}

export default function GerenciarMateriais() {
  const [nome, setNome] = useState('');
  const [fase, setFase] = useState('1 - base');
  const [unidade, setUnidade] = useState('unid');
  const [quantidadeM2, setQuantidadeM2] = useState('');
  const [area, setArea] = useState('12'); 
  const [quantidadeTotal, setQuantidadeTotal] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [materiais, setMateriais] = useState<Material[]>([]);


  const adicionarMaterial = () => {
    if (nome && quantidadeTotal && valorTotal) {
      const precoUnitario = (parseFloat(valorTotal) / parseFloat(quantidadeTotal)).toFixed(2);
      const novoMaterial = { nome, fase, unidade, quantidadeTotal, valorTotal, precoUnitario };
      setMateriais([...materiais, novoMaterial]);
      setNome('');
      setQuantidadeM2('');
      setQuantidadeTotal('');
      setValorTotal('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Resumo */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total de Materiais: {materiais.length}</Text>
        <Text style={styles.summaryText}>
          Custo Total: R$ {materiais.reduce((acc, m) => acc + parseFloat(m.valorTotal || '0'), 0).toFixed(2)}
        </Text>
      </View>

      {/* Formulário */}
      <Text style={styles.sectionTitle}>Adicionar Material</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Cimento (saco 50kg)"
        value={nome}
        onChangeText={setNome}
      />

      <Picker selectedValue={fase} style={styles.input} onValueChange={(itemValue) => setFase(itemValue)}>
        <Picker.Item label="1 - Base" value="1 - Base" />
        <Picker.Item label="2 - Estrutura" value="2 - Estrutura" />
        <Picker.Item label="3 - Acabamento" value="3 - Acabamento" />
      </Picker>

      <Picker selectedValue={unidade} style={styles.input} onValueChange={(itemValue) => setUnidade(itemValue)}>
        <Picker.Item label="unid" value="unid" />
        <Picker.Item label="m²" value="m²" />
        <Picker.Item label="kg" value="kg" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Quantidade ,Ex: 10"
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
      {quantidadeTotal && valorTotal ? (
        <Text style={styles.tip}>
          Preço unitário: R$ {(parseFloat(valorTotal) / parseFloat(quantidadeTotal)).toFixed(2)} por {(parseFloat(quantidadeTotal) / 0.25).toFixed(2)} {unidade}
        </Text>
      ) : null}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={adicionarMaterial}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addpButton} onPress={() => router.navigate('/componentes/cliente/Cliente')}>
          <Text style={styles.buttonText}>Proximo</Text>
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
              {m.nome} - {m.quantidadeTotal} {m.unidade} - R$ {m.valorTotal} (R$ {m.precoUnitario}/{m.unidade})
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f4f4', padding: 16 },
  summary: { marginBottom: 20 , },
  summaryText: { 
  fontSize: 16, 
  fontWeight: 'bold', 
  color: '#0a030e' 
},
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#4B0082' },
  input: { backgroundColor: '#ede7e7', padding: 10, borderRadius: 8, marginVertical: 5 },
  tip: { fontSize: 14, color: '#13ce42', marginVertical: 5 },
  calcButton: { backgroundColor: '#3277de', padding: 10, borderRadius: 8, marginVertical: 5 },
  calcText: { fontSize: 14, color: '#8d0b0b', marginVertical: 5 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  cancelButton: { backgroundColor: '#cd1a1a', padding: 12, borderRadius: 8, flex: 1, marginRight: 5 },
  addButton: { backgroundColor: '#27b42c', padding: 12, borderRadius: 8, flex: 1, marginLeft: 5 },
  buttonText: { color: '#f1eded', textAlign: 'center', fontWeight: 'bold' },
  emptyText: { fontSize: 14, color: '#e6dcdc', marginTop: 10 },
  materialItem: { backgroundColor: '#786c6c', padding: 10, borderRadius: 8, marginVertical: 5 },
  materialText: { fontSize: 14, color: '#ede9e9' },
  addpButton: { backgroundColor: '#272eb4', padding: 12, borderRadius: 8, flex: 1, marginLeft: 5 },
});