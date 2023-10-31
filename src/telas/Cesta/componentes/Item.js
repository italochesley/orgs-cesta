import React from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';

export default function Itens({ item: { nome, imagem } }) {
   return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Text style={estilos.nome} >{nome}</Text>
    </View>
    return <>
        
        
    </>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"

    },
    imagem: {
        height: 46,
        width: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})