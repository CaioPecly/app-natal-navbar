import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function peru() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Peru de Natal</Text>
      <Text style={styles.text}>
        O Peru de Natal é o prato principal que não pode faltar na ceia. Temperado com ervas e especiarias, é assado lentamente até ficar suculento e dourado. Tradicionalmente, o peru é servido com farofa, arroz à grega e molho de frutas, tornando-se o centro das atenções durante as festividades. Um verdadeiro ícone das celebrações natalinas.
      </Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Para o tempero do Peru:</Text>{"\n"}
        - 1 peru inteiro (cerca de 4 a 5 kg){"\n"}
        - 1/2 xícara de azeite de oliva{"\n"}
        - 4 dentes de alho picados{"\n"}
        - 1 cebola grande picada{"\n"}
        - 1 ramo de alecrim fresco{"\n"}
        - 1 ramo de tomilho fresco{"\n"}
        - 1 folha de louro{"\n"}
        - 1/2 xícara de vinho branco seco{"\n"}
        - 1/4 xícara de suco de laranja{"\n"}
        - 1/4 xícara de molho de soja{"\n"}
        - Sal e pimenta-do-reino a gosto{"\n"}
        - 1 colher de sopa de açúcar mascavo (opcional para caramelizar){"\n"}
        - 1 xícara de caldo de galinha (ou água){"\n"}
        - 2 cenouras cortadas em rodelas{"\n"}
        - 1 maçã cortada em cubos (opcional, para dar um toque doce){"\n"}
        - 2 colheres de sopa de manteiga (para passar sobre o peru antes de assar)
      </Text>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>
        1. Em uma tigela, misture o azeite, o alho, a cebola, o alecrim, o tomilho, a folha de louro, o vinho branco, o suco de laranja e o molho de soja. Tempere o peru com essa mistura e deixe marinar por pelo menos 4 horas ou durante a noite.{"\n"}
        2. Preaqueça o forno a 180°C. Coloque o peru na assadeira com o caldo de galinha e cubra com papel alumínio. Asse por 2 a 2,5 horas, regando o peru a cada 30 minutos.{"\n"}
        3. Retire o papel alumínio e aumente a temperatura do forno para 220°C. Deixe dourar por 30 a 40 minutos. Pincele com manteiga derretida nos últimos 15 minutos e adicione açúcar mascavo se desejar.{"\n"}
        4. Deixe o peru descansar por 15 a 20 minutos antes de fatiar. Sirva acompanhado de farofa, arroz à grega e molho de frutas.
      </Text>
      <View>
        <Image source={require('../assets/peru.jpg')} style={styles.img} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388e3c',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  img: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
