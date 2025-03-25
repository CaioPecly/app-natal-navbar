import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import peru from './peru';
import Pave from './Pave';

const Stack = createStackNavigator();

export default function RotaBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="peru" component={peru} />
                <Stack.Screen name="Pave" component={Pave} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
