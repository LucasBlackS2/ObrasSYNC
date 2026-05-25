import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const router = useRouter();
export default function CronogramaScreen() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(Array(9).fill(0));

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

  const handleNext = () => {
    if (step < steps.length) {
      const newProgress = [...progress];
      newProgress[step] = 1; // marca etapa como concluída
      setProgress(newProgress);
      setStep(step + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cronograma da Obra</Text>

      {step < steps.length ? (
        <View style={styles.card}>
             <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backText}>←</Text>
                  </TouchableOpacity>
          <Text style={styles.stepText}>Etapa {step + 1}: {steps[step]}</Text>
          <Button title="Concluído" onPress={handleNext} />
        </View>
      ) : (
        <Text style={styles.finished}>✅ Todas as etapas concluídas!</Text>
      )}

      <Text style={styles.chartTitle}>Progresso</Text>
      <ProgressChart
        data={{
          labels: steps.map((s, i) => `Etapa ${i + 1}`),
          data: progress
        }}
        width={Dimensions.get("window").width - 40}
        height={300}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#1e2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1e2923",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
        }}
        style={styles.chart}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3
  },
  stepText: {
    fontSize: 18,
    marginBottom: 10
  },
  finished: {
    fontSize: 20,
    textAlign: "center",
    color: "green",
    marginBottom: 20
  },
  chartTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },
  chart: {
    borderRadius: 10
  },
   backButton: {
    marginRight: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 20,
  },
});
