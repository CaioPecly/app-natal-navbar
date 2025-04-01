import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Pave() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pavê de Natal</Text>
      <Text style={styles.text}>
        O pavê de Natal é uma sobremesa simples e deliciosa, feita com camadas de biscoito, creme e frutas ou chocolate. A versão natalina é geralmente feita com frutas vermelhas e chocolate, dando um toque especial à mesa de Natal. Ele é gelado, o que o torna uma opção refrescante para equilibrar as comidas mais pesadas da ceia.
      </Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Para o Creme:</Text>{"\n"}
        - 2 latas de leite condensado{"\n"}
        - 2 caixinhas de creme de leite{"\n"}
        - 2 xícaras de leite{"\n"}
        - 3 colheres de sopa de amido de milho (maisena){"\n"}
        - 1 colher de chá de essência de baunilha{"\n"}
        - 200g de chocolate branco picado (opcional, para um toque especial){"\n"}{"\n"}
        
        <Text style={styles.bold}>Para a montagem:</Text>{"\n"}
        - 1 pacote de biscoito champanhe ou biscoito de maisena{"\n"}
        - 300g de frutas vermelhas (morango, framboesa, amora, etc.){"\n"}
        - 200g de chocolate meio amargo ou ao leite (opcional){"\n"}
        - 1 xícara de leite para umedecer os biscoitos{"\n"}
        - 2 colheres de sopa de licor de sua preferência (opcional)
      </Text>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>
        1. Em uma panela, misture o leite condensado, o creme de leite, o leite e o amido de milho. Leve ao fogo médio, mexendo sempre até o creme engrossar.{"\n"}
        2. Quando atingir uma consistência cremosa, retire do fogo e adicione a essência de baunilha. Se desejar, acrescente o chocolate branco picado e misture até derreter completamente.{"\n"}
        3. Em um recipiente raso, coloque a xícara de leite (e o licor, se preferir). Umedeça rapidamente os biscoitos no leite.{"\n"}
        4. Em uma travessa, comece a montar o pavê, fazendo uma camada de biscoitos umedecidos, seguido de uma camada de creme e frutas. Repita até acabar os ingredientes.{"\n"}
        5. Finalize com o creme e decore com fios de chocolate derretido e frutas vermelhas. Deixe gelar por pelo menos 4 horas antes de servir.
      </Text>
      <View>
      
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
    color: '#d32f2f',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f',
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
