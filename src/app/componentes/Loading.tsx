import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando...</Text>
      <ActivityIndicator size="large" color="#4A90E2" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe5e5', // opcional
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#080808', // opcional
  }
});

export default Loading;
