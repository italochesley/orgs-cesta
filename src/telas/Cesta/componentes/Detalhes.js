import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

import Botao from "../../../Componentes/Botao";

const width = Dimensions.get('screen').width;

export default function Detalhes({ nome, nomeFazenda, descricao, preco, logoFazenda, botao }) {
    return <>
        <Text style={estilos.nome}>{ nome }</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}>{ nomeFazenda }</Text>
        </View>
        <Text style={estilos.descricao}>{ descricao} </Text>
        <Text style={estilos.preco}> { preco } </Text>
        <Botao texto={botao} style={botao}></Botao>
    </>
}

const estilos = StyleSheet.create({
    nome: {
      color: "#464646",
      fontSize: 26,
      lineHeight: 42,
      fontWeight: "bold",
    },
    fazenda: {
      flexDirection: "row",
      paddingVertical: 12,
    },
    imagemFazenda: {
      width: 32,
      height: 32,
    },
    nomeFazenda: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
    },
    descricao: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26,
    },
    preco: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8,
    },
    botao:{
        marginTop: 16
     }
  });