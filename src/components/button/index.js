import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import x from "../../../assets/x.png";
import {stylesButton} from "./styles.js";


export default function DeleteButton (handleDeleteTask, onClick) {
    return(
        <>
            <View>
                <TouchableOpacity
                onClick={onClick}>
                    <Image source={x} style={stylesButton.taskDeleteImage}/>
                </TouchableOpacity>
            </View>
        </>
        );
};