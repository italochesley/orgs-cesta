import React from 'react';
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item'

export default function Cesta({ topo, detalhes, itens }) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Text style={estilos.titulo}>{itens.titulo}</Text>
          </View>
        </>
      }}
    />
    </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20
  }
});