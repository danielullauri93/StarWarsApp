import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {searchPeople} from '../services/api';
import SearchBar from '../components/molecules/SearchBar';
import Card from '../components/molecules/Card';
import {useTheme} from 'react-native-paper';

import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App'; // Adjust the path based on your project structure

import {translatePerson} from '../utils/translate';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const {colors} = useTheme();

  const {data: results, refetch} = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchPeople(query),
    enabled: false, // No se ejecuta automáticamente
  });

  //   Configuración de useQuery:
  // queryKey: ['search', query]: La clave depende del término de búsqueda. Cambios en query invalidan el cache.
  // queryFn: Llama a searchPeople con el query actual.
  // enabled: false: Impide ejecuciones automáticas. Solo se ejecuta al llamar manualmente a refetch().

  const handleSearch = () => {
    refetch(); // 👈 Ejecuta manualmente la query
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <SearchBar
        placeholder="Buscar personajes"
        value={query}
        onChangeText={setQuery}
        onPress={handleSearch}
      />
      <FlatList
        data={results?.map(translatePerson)}
        renderItem={({item}) => (
          <Card
            title={item.nombre}
            description={`Altura: ${item.altura}, Peso: ${item.peso}`}
            onPress={() =>
              navigation.navigate('Detail', {
                person: item as {
                  nombre: string;
                  altura: string;
                  peso: string;
                  color_de_piel: string;
                  color_de_cabello: string;
                  color_de_ojos: string;
                  año_de_nacimiento: string;
                  género: string;
                },
              })
            }
          />
        )}
        keyExtractor={item => item.nombre}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SearchScreen;
