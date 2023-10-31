import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto ({ children }){
    return <Text>{ children } style = {estilos.texto}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 16
    }
})