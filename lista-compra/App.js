import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListarItens from './criar-lista';
import leitura from './leitura';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>leitor</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1 }}>
       <ListarItens /> {/* Substitua pelo conteúdo da criar-lista.js */}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator> */}
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="Saber Preço" component={HomeScreen} />
        <Tab.Screen name="Minhas listas" component={SettingsScreen} />
        <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen name="Scanner" component={ScannerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


