import React, {useState} from "react";

import { View, Text, TextInput, Image, ScrollView, Button, FlatList} from "react-native";
import lupa from "../../../assets/lupa.png";
import Task from "../../components/task/index.js";
import {styles} from "./styles";
import ButtonAdd from "../../components/button/index.js";

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
    
    function handleConfirmeNewTask() {
        handleNewTask(inputData);
        setInputData(defaultTask);
    };

    function handleNewTask(task) {
        let List = taskList;
        List.push(task);
        setTaskList(List);
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
                              title="Nova tarefa"
                              onPress={handleConfirmeNewTask}>
                           </Button>
                           <FlatList
                              keyExtractor={(item) => item.id}
                              data={taskList}
                              renderItem={({item}) => <Task task={item}/>}>
                           </FlatList>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        </View>
    
    </>
};


