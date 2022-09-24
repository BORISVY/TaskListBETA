import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import x from "../../../assets/x.png";
import Edition from "../../../assets/Edition.png";
import {stylesButton} from "./styles.js";


export default function DeleteButton () {

    const handleEditTask = (task) => {
        alert(
            "task.title",
            "task.description",
            [
                {
                    text: "Cancelar"
                },
                {
                    text: "Concluir Tarefa",
                    onPress: (prevState) => ({   
                        ...prevState,
                        completed: true })
                },
            ]
    
        )
    };
    
    function handleDeleteTask(index){
        const filteredTask = this.state.filteredTask.slice();
        filteredTask.splice(index, 1);
        this.setTaskList(filteredTask);
    };

    return(
        <>
            <View>
                <TouchableOpacity
                    onPress={handleEditTask}>
                        <Image 
                            source={Edition}
                            style={stylesButton.taskEditImage}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleDeleteTask}>
                        <Image 
                            source={x} 
                            style={stylesButton.taskDeleteImage}/>
                </TouchableOpacity>
            </View>
        </>
        );
};