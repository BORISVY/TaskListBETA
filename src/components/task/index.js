import React from 'react';

import { View, Text } from 'react-native';
import {stylesTask} from "./styles.js";
import DeleteButton from '../button/index.js';


export default function Task ({task, handleDeleteTask}){

    

    return(
        
        <View style={stylesTask.taskContainer}>
            <Text style={stylesTask.taskTitle}>
                Título: {task.title}
            </Text>
            <Text style={stylesTask.taskDescription}>
                Descrição: {task.description}
            </Text>
            <DeleteButton onClick={() => handleDeleteTask(task.id)}/>
        </View>
    )
};