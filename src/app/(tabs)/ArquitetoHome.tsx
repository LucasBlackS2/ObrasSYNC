import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Loading from '@/componentes/Loading';
import { API_BASE_URL } from "../services/config";
interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  sexo: string;
  foto: string;
}

export default function GerenciarObra() {
  const router = useRouter();
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
        console.error(error);
        Alert.alert("Erro", "Falha na comunicação com o servidor.");
      }
    };

    carregarFuncionarios();
  }, []);

  const renderItem = ({ item }: { item: Funcionario }) => (
    <View style={styles.employeeCard}>
      <Image
        source={{
          uri: item.foto || "https://via.placeholder.com/60",
        }}
        style={styles.foto}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.cargo}>{item.cargo}</Text>
        <Text style={styles.sexo}>{item.sexo}</Text>
      </View>
    </View>
  );
  const [loading, setLoading] = useState(true);

React.useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // simula carregamento por 2 segundos

  return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
}, []);

if (loading) {
  return <Loading />;
}
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
             <TouchableOpacity style={styles.backButton} onPress={() => router.push("/componentes/Arquiteto/nova_obra2")}>
               <Text style={styles.backText} >+ Novo Projeto</Text>
             </TouchableOpacity>
             </View>
      <Text style={styles.title}>Gerenciar Obra</Text>
      <View style={styles.progressBox}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: "0%",
              },
            ]}
          />
             </View>
        <Text style={styles.progressText}>0%</Text>
        <Text style={styles.progressDetails}>
                 </Text>
      </View>

      <View style={styles.subProgressContainer}>
        <View style={styles.subProgressBox}>
          <Text style={styles.subProgressLabel}>
            Progresso Temporal
          </Text>
          <Text style={styles.subProgressValue}>0%</Text>
        </View>

        <View style={styles.subProgressBox}>
          <Text style={styles.subProgressLabel}>
            Progresso Materiais
          </Text>
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
        onPress={() =>
          router.push("/componentes/Arquiteto/CadastroFuncionatio")
        }
      >
        <Text style={styles.buttonText}>
          Cadastrar Funcionário
        </Text>
      </TouchableOpacity>

      <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>
          Funcionários Cadastrados
        </Text>

        {funcionarios.length === 0 ? (
          <Text style={styles.emptyText}>
            Nenhum funcionário cadastrado.
          </Text>
        ) : (
          <FlatList
            data={funcionarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4ff",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },

  progressBox: {
    backgroundColor: "#e0f0ff",
    padding: 15,
    borderRadius: 10,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginVertical: 8,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#007bff",
  },

  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },

  progressDetails: {
    fontSize: 12,
    color: "#666",
  },

  subProgressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  subProgressBox: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },

  subProgressLabel: {
    fontSize: 14,
    color: "#333",
  },

  subProgressValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 14,
    color: "#333",
  },

  cardValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },

  buttonPurple: {
    backgroundColor: "#6c63ff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 15,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  emptyBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },

  listContent: {
    paddingBottom: 10,
  },

  employeeCard: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  cargo: {
    fontSize: 14,
    color: "#666",
  },

  sexo: {
    fontSize: 14,
    color: "#007bff",
    marginTop: 2,
  },
   header: {

    alignItems: 'center',
    backgroundColor: '#6c63ff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
    height: 70,
    width: 200,

  },
  backButton: {
    padding: 5,
    borderRadius: 5,
    marginEnd: 'auto',

  },
  backText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    
  },
  iconButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});