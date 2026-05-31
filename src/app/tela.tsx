import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelecionarPerfil() {
  const router = useRouter();
  const user = { nome: "" }; // Substitua por lógica real de autenticação
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('./componentes/Arquiteto/Login')}>
            <Text style={styles.backText} >←</Text>
          </TouchableOpacity>
          </View>
        <View>
        <Text style={styles.title}>Selecionar Perfil</Text>
        <View style={{ width:1 }} /> {/* espaço para alinhar */}
      </View>
      <View style={styles.containerIma}>
        <Image source={require('./page/img/logo.png')} style={styles.img} />
      </View>
      <View style={styles.title}>
      
      <Text style={styles.user}>Bem-vindo {user?.nome || ''}</Text>
      
      <Text style={styles.titulo}>
        ObrasSync
      </Text>
</View>
      {/* Texto de instrução */}
      <View style={styles.instruction}>
        <Text style={styles.instructionText}>
          Escolha uma das opções abaixo:
        </Text>
      </View>

      {/* Opções */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('./componentes/Arquiteto/Login')}>
          <Text style={styles.optionText}>Arquiteto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('./componentes/MestreObras/codigoMestre')}>
          <Text style={styles.optionText}>Mestre de Obras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('./componentes/cliente/codigoCliente')}>
          <Text style={styles.optionText}>Cliente</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeaea',
  
  },
  header: {

    alignItems: 'center',
    backgroundColor: '#eeeaea', // Roxo
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
    borderRadius: 5,
    marginEnd: 'auto',

  },
  backText: {
    color: '#111111',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    flex:1,
    alignItems:'center',
    color: '#080404',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    
  },
  user: {
    alignItems:'center',
    justifyContent:'center',
    height: 50,

    fontSize: 26,
    color: '#080808',
    fontWeight: 'bold',

  },
  instruction: {
    alignItems:'center',
    marginTop:10,

    paddingHorizontal: 1,
  },
  instructionText: {
    fontSize: 16,
    color: '#120e0e',
    marginTop: -100,
  },
  options: {
    marginTop: 20,
    paddingHorizontal: 15,

  },
  optionButton: {
    backgroundColor: '#124fd2',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  img:{
    height:300,
    width:300,
  },
 containerIma:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center',


 },
titulo:{
  alignItems:'center',
  color:'Black',
  fontSize: 26,
  margin:10,
  justifyContent:"center",
  fontWeight: 'bold',
  marginTop:10,
},
  
});