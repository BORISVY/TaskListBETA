import React from "react";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    initialTitle:{
        marginTop: 40,
        marginLeft: 15,
        marginBottom: 8,
        fontSize: 30,
        fontWeight: "bold",
        color: "#eee",
    },

    backgroundInitialTitle:{
        width: "100%",
        height: 78,
        backgroundColor: "#708090",
    },

    searchBackground:{
        backgroundColor:"#00bfff",
        width: "100%",
        height: 60,
    },

    searchBox:{
        border: "1px",
        borderColor: "#666",
        borderRadius: 6,
        backgroundColor: "white",
        width: 180,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 170,
        marginRight: 20,
    },

    searchInput:{
        fontSize: 20,
        marginLeft: 5,
        marginTop: 5,
        maxWidth: 150,
    },

    searchInputImage:{
        width: 35,
        height: 35,
        marginLeft: 142,
        marginTop: -30,
    },

    backgroundTaskList:{
        width: "100%",
        height: "100%",
        backgroundColor: "#708090",
    },

    createTaskInput:{
        margin: 5,
        height: 40,
        backgroundColor:"white",
        paddingHorizontal: 10,
        borderRadius: 7,
        marginBottom: 10,
    },

    dateComponent:{
        width: 350, 
    },

})