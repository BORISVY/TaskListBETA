import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import {stylesTask} from "./styles.js";
import DeleteButton from "../deleteButton/index.js";

export default function Task ({task}){

    return(
        <TouchableOpacity
        onPress={alert}>
            <View style={stylesTask.taskContainer}>
                <Text style={stylesTask.taskTitle}>
                    Título: {task.title}
                </Text>
                <Text style={stylesTask.taskDescription}>
                    Descrição: {task.description}
                </Text>
                <DeleteButton/>
            </View>
        </TouchableOpacity>
    )
};