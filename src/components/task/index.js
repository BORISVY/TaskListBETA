import React from 'react';

import { View, Text } from 'react-native';
import {stylesTask} from "./styles.js";


export default function Task ({task}){

    return(
        <View style={stylesTask.taskContainer}>
            <Text style={stylesTask.taskTitle}>
                Título: {task.title}
            </Text>
            <Text style={stylesTask.taskDescription}>
                Descrição: {task.description}
            </Text>
        </View>
    )
};