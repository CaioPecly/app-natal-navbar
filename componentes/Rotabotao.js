import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import musicas from './musicas';
import perfil from './perfil';

const Stack = createStackNavigator();

export default function RotaBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="musicas" component={musicas} />
                <Stack.Screen name="perfil" component={perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
