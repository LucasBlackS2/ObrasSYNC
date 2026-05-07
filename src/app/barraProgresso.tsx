import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const TotalSteps = 4; // Defina o número total de passos

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Calcula o progresso de 0 a 1
  const progress = currentStep / TotalSteps;

  const nextStep = () => {
    if (currentStep < TotalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passo {currentStep} de {TotalSteps}</Text>
      
      {/* BARRA DE PROGRESSO */}
      <Progress.Bar 
        progress={progress} 
        width={1000} 
        height={15}
        color={'#4CAF50'}
        animated={true}
      />

      <View style={styles.stepContent}>
        <Text>Conteúdo do Passo {currentStep}</Text>
      </View>

      
        {currentStep > 1 && <Button title="Voltar" onPress={prevStep} />}
        {currentStep < TotalSteps ? (
          <Button title="Próximo" onPress={nextStep} />
        ) : (
          <Button title="Finalizar" onPress={() => alert('Processo Finalizado!')} />
        )}
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  stepContent: { marginVertical: 30, height: 100 },
  buttonContainer: { flexDirection: 'row', gap: 10 }
});

export default App;