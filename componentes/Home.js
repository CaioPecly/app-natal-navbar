import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usando Ionicons para ícones de música

export default function Home(props) {
    return (
        <ImageBackground 
            source={require('../assets/music.jpg')}  
            style={estilo.container}  
        >
            <SafeAreaView style={estilo.safeContainer}>
                <Text style={estilo.titulo}>Dev Music</Text>
                <Text style={estilo.texto}>A Dev Music é uma plataforma inovadora que conecta desenvolvedores e amantes da música. Ela oferece ferramentas e recursos para criar, 
                    compartilhar e explorar músicas de maneira interativa e colaborativa, unindo tecnologia e arte de forma única. 
                    Ideal para quem busca inspiração ou deseja aprimorar suas habilidades musicais e tecnológicas.</Text>
                
                <Text style={estilo.bemVindo}></Text>

                <View style={estilo.navbar}>
                    {/* Botão "Músicas" com o ícone de música */}
                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('musicas')}>
                        <Icon name="musical-note" size={20} color="#fff" /> {/* Ícone de música */}
                        <Text style={estilo.textButton}>Músicas</Text>
                    </TouchableOpacity>

                    {/* Botão "Meu Perfil" com o ícone de usuário */}
                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('perfil')}>
                        <Icon name="person" size={20} color="#fff" /> {/* Ícone de usuário */}
                        <Text style={estilo.textButton}>Meu Perfil</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
    },
    safeContainer: {
        flex: 1,
        justifyContent: 'space-between',  
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#d32f2f',  
        marginBottom: 20,  
    },
    texto: {
        fontSize: 18,
        color: '#FFF',  
        textAlign: 'justify',  
        marginBottom: 30,
        fontWeight: 'bold',
    },
    bemVindo: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 40,  
        fontWeight: '600',
        marginHorizontal: 20,
    },
    navbar: {
        position: 'absolute',
        bottom: 20, 
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',  
        paddingHorizontal: 20,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#f57c00',  
        borderRadius: 30,  
        alignItems: 'center',
        elevation: 5,  
        flexDirection: 'row',  
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#fff',  
        fontWeight: '500',  
        marginLeft: 10,  
    },
});
