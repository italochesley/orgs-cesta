import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Botao({ texto, onpress, style }) {
    return <TouchableOpacity style={estilos.botao} onPress={() => { }}>
        <Text style={estilos.textobotao}>{texto}</Text>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textobotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})