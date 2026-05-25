import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function CronogramaScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(Array(9).fill(false));

  const steps = [
    "Planejamento Inicial",
    "Preparação do Terreno",
    "Fundação",
    "Estrutura",
    "Alvenaria",
    "Instalações",
    "Cobertura",
    "Acabamentos",
    "Finalização"
  ];

  const toggleStep = (index: number) => {
    const newProgress = [...progress];
    newProgress[index] = !newProgress[index]; // alterna concluído/não concluído
    setProgress(newProgress);
  };

  const completedCount = progress.filter(Boolean).length;
  const percent = (completedCount / steps.length) * 100;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cronograma da Obra</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Gráfico no topo */}
      <Text style={styles.chartTitle}>Progresso Total: {percent.toFixed(0)}%</Text>
      <LineChart
        data={{
          labels: steps.map((_, i) => `Etapa ${i + 1}`),
          datasets: [
            {
              data: steps.map((_, i) => (progress[i] ? 1 : 0)),
            },
          ],
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#1e2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1e2923",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />

      {/* Lista de etapas */}
      {steps.map((step, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, progress[index] && styles.cardDone]}
          onPress={() => toggleStep(index)}
        >
          <Text style={styles.stepTitle}>
            {progress[index] ? "✅ " : "⬜ "} Etapa {index + 1}: {step}
          </Text>
          <Text style={styles.stepDesc}>{getDescricao(step)}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Explicações detalhadas de cada etapa
function getDescricao(step: string): string {
  switch (step) {
    case "Planejamento Inicial":
      return "Definir escopo, aprovar projetos, elaborar orçamento e obter licenças.";
    case "Preparação do Terreno":
      return "Limpeza, nivelamento, demarcação e instalação de tapumes.";
    case "Fundação":
      return "Escavação, sondagem, construção de sapatas/estacas e impermeabilização.";
    case "Estrutura":
      return "Levantamento de pilares, vigas e montagem da laje.";
    case "Alvenaria":
      return "Construção das paredes, aberturas para portas/janelas e revestimento inicial.";
    case "Instalações":
      return "Execução elétrica, hidráulica, gás e telecomunicações.";
    case "Cobertura":
      return "Estrutura do telhado, colocação de telhas e instalação de calhas.";
    case "Acabamentos":
      return "Reboco, pintura, pisos, portas, janelas e metais.";
    case "Finalização":
      return "Revisão geral, limpeza da obra, vistoria técnica e entrega.";
    default:
      return "";
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  cardDone: {
    backgroundColor: "#d4edda",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  stepDesc: {
    fontSize: 14,
    color: "#333",
  },
  chartTitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
  },
  chart: {
    borderRadius: 10,
    marginBottom: 20,
  },
  backButton: {
    margin: 10,
    height: 40,
    width: 40,
  },
  backText: {
    color: "#0d0d0d",
    fontSize: 36,
  },
});
