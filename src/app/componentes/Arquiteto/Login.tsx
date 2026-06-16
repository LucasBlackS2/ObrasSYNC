import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginUsuario } from "../../services/api";
import Loading from "../Loading";
export interface LoginProps {}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
  let tentativasLogin = 0;

const handleLogin = async () => {
  if (!email || !senha) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  try {
    const data = await loginUsuario(email, senha);

    if (data.success) {
      alert(data.message);
      router.push("/ArquitetoHome");
      tentativasLogin = 0; // zera tentativas em caso de sucesso
    } else {
      alert(data.message || "Email ou senha inválidos");
      tentativasLogin++;
      if (tentativasLogin >= 3) {
        router.push("/componentes/Home/TelaError"); // redireciona após 3 falhas
      }
    }
  } catch (error) {
    console.error(error);
    alert("Erro de conexão com o servidor");
    tentativasLogin++;
    if (tentativasLogin >= 3) {
      router.push("/componentes/Home/TelaError"); // redireciona após 3 falhas
    }
  }
};

  return (
   

    <View style={styles.container}>
     
      <Text style={styles.title}>ObraSync</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/componentes/cadastro")}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#a09a9a",
  },
  title: {
    backgroundColor: "#b75321",
    color: "#0c0706",
    fontSize: 30,
    padding: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "#fbfaf9",
    borderWidth: 10,
    borderRadius: 200,
  },
  input: {
    height: 50,
    margin: 10,
    padding: 10,
    borderColor: "#0b0e05",
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#545151",
    color: "#000000",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
   header: {

    alignItems: 'center',
   
    paddingHorizontal: 10,
    paddingVertical: 15,
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
  },
});
