import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import Cesta from './src/telas/Cesta';
import mock from "./src/Mocks/Cesta"

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Cesta {...mock}/>
      {/* Possível add AppLoading aqui */}
    </SafeAreaView>
  );
}