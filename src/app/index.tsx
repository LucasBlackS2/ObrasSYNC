import { useRouter } from 'expo-router';
import React, {useEffect, useRef, type PropsWithChildren} from 'react';
import {Animated, Text, View, type ViewStyle, Image} from 'react-native';

// You can then use your `FadeInView` in place of a `View` in your components:
export default ()=> {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Para o texto
  const overlayAnim = useRef(new Animated.Value(1)).current; // Começa com overlay preto
  const router = useRouter()
  useEffect(() => {
    Animated.parallel([
      // Animação do texto aparecendo
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000, // 4 segundos, junto com o clareamento
        useNativeDriver: true,
      }),
      // Animação do overlay clareando gradualmente
      Animated.timing(overlayAnim, {
        toValue: 0, // Vai de preto (1) para transparente (0)
        duration: 10000, // 4 segundos para clarear
        useNativeDriver: true,
      }),
    ]).start(()=>
    router.navigate('/tela'));
  }, [fadeAnim, overlayAnim]);

  return (
    <View style={{ flex: 1 }}>
      {/* Imagem de fundo cobrindo toda a tela */}
      <Image
        source={require('./page/img/logo.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />

      {/* Overlay preto que vai clareando */}
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: overlayAnim,
        }}
      />

      {/* Conteúdo sobreposto à imagem */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'rgba(0, 0, 0, 0.75)',
        }}>
        <Animated.Text
          style={{
            fontSize: 32, // Texto menor
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 5,
            opacity: fadeAnim,
          }}>
          ObrasSync
        </Animated.Text>
      </View>
    </View>
  );
};