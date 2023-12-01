// ScannerScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const ScannerScreen = ({ navigation }) => {
  const [barcode, setBarcode] = useState('');

  const handleBarcodeScan = async ({ data }) => {
    try {
      const response = await axios.get(`URL_DA_SUA_API/${data}`);
      const productInfo = response.data; // Supondo que a resposta contenha informações sobre o produto
      // Faça o que quiser com as informações do produto
    } catch (error) {
      console.error('Erro ao obter informações do produto:', error);
    }

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={handleBarcodeScan}
        // Adicione outras propriedades de configuração da câmera conforme necessário
      />
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{barcode}</Text>
      </View>
    </View>
  );
  
};

export default ScannerScreen;
