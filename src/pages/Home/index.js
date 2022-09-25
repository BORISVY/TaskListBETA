import React, {useState} from "react";

import { View, Text, TextInput, Image, Button, FlatList, Alert} from "react-native";
import lupa from "../../../assets/lupa.png";
import Task from "../../components/task/index.js";
import {styles} from "./styles";

const defaultTask = {

    id: 0,
    title: "",
    date: "",
    description: "",
    completed: false,
};

export default function Home (){
    
    const [taskList, setTaskList] = useState([]);
    const [inputData, setInputData] = useState(defaultTask);
    const [position, setPosition] = useState(0);
    
    function handleConfirmeNewTask() {
        handleNewTask(inputData);
        setInputData(defaultTask);
    };

    console.log(taskList)
    console.log(position)

    function handleNewTask(task) {

        
        let List = taskList;
        List.push(task);
        setTaskList(List);
        task.id = position;
        task.completed = status;
    
    };

    return <>

        <View style={styles.backgroundTaskList}>
            <View style={styles.backgroundInitialTitle}>
                <Text style={styles.initialTitle}>
                    Lista de Tarefas
                </Text>
            </View>
            <View style={styles.searchBackground}>
                <View style={styles.searchBox}>
                    <TextInput
                    style={styles.searchInput}
                    maxLength={15}
                    placeholder="Consulta">
                    </TextInput>
                    
                    <Image 
                    source={lupa}
                    style={styles.searchInputImage}/>    
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <TextInput
                            style={styles.createTaskInput}
                            placeholder="Título"
                            value={inputData.title}
                            onTouchStart={() => setPosition(position + 1)}
                            onChangeText={(e) =>
                            setInputData((prevState) => ({   
                            ...prevState,
                            title: e,
                            }))}>
                        </TextInput>

                        <TextInput
                            style={styles.createTaskInput}
                            placeholder="Descrição"
                            value={inputData.description}
                            onChangeText={(e) =>
                            setInputData((prevState) => ({
                            ...prevState,
                            description: e,
                            }))}>
                        </TextInput>

                        <Button
                            key={taskList.id}
                            title="Nova tarefa"
                            onPress={handleConfirmeNewTask}>
                        </Button>  
                        <FlatList
                            data={taskList}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => <Task task={item}/>}>
                        </FlatList>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                <Button
                    title="New Task"
                    onPress={() => navigation.navigate('Nova Tarefa')}/>
                
            </View>
        </View>
    
    </>
};


