import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [listacompras, setListaCompras] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  useEffect(() => {
    // Carregar os dados salvos ao iniciar o aplicativo
    carregarListaCompras();
  }, []);

  const adicionarItem = () => {
    const novaLista = [...listacompras, novoItem];
    setListaCompras(novaLista);
    salvarListaCompras(novaLista);
    setNovoItem('');
  };

  const salvarListaCompras = (lista) => {
    try {
      localStorage.setItem('listaCompras', JSON.stringify(lista));
    } catch (error) {
      console.error('Erro ao salvar lista de compras:', error);
    }
  };

  const carregarListaCompras = () => {
    try {
      const listaSalva = localStorage.getItem('listaCompras');
      if (listaSalva) {
        setListaCompras(JSON.parse(listaSalva));
      }
    } catch (error) {
      console.error('Erro ao carregar lista de compras:', error);
    }
  };

  const apagarItem = (index) => {
    const novaLista = [...listacompras];
    novaLista.splice(index, 1);
    setListaCompras(novaLista);
    salvarListaCompras(novaLista);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={listacompras}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => apagarItem(index)}
          >
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.deleteButton}>X</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Adicionar item"
        value={novoItem}
        onChangeText={(text) => setNovoItem(text)}
      />
      <Button title="Adicionar" onPress={adicionarItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    color: 'red',
    fontSize: 18,
  },
  input: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
});