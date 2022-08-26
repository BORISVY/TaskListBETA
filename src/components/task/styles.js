import React from "react";
import { StyleSheet } from 'react-native';

export const stylesTask = StyleSheet.create({

    taskTitle:{
        marginTop: -10,
        marginLeft: 2,
        marginRight: 70,
        marginBottom: 4,
        fontSize: 18,
        fontWeight: "bold",
        color: "#eee",
    },

    taskDescription:{
        marginTop: -5,
        marginLeft: 2,
        marginRight: 70,
        marginBottom: 4,
        fontSize: 15,
        fontWeight: "bold",
        color: "#eee",
    },

    taskContainer:{
        height: 50,
        marginTop: 15,
        marginBottom: 0,
        backgroundColor: "#00bfff",
        margin: 5,
        padding: 15,
        display: "flex",
        borderRadius: 5,
        justifyContent: "space-between",
    },
})