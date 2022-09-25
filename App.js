import React from 'react';
import { View } from 'react-native';
import  Home  from '../TaskListBETA/src/pages/Home/index.js'
import  NewTask from '../TaskListBETA/src/pages/NewTask/index.js'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigatorContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Lista de Tarefas" component={Home} />
      <Stack.Screen name="Nova Tarefa" component={NewTask} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigatorContainer>
      <MyStack/>
    </NavigatorContainer>
  )
}

