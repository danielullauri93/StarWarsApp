import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  onPress,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input} // Aplica el estilo para expandirlo
      />
      <Button title="Buscar" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinea en fila
    alignItems: 'center', // Centra verticalmente
    width: '100%', // Ocupa todo el ancho
  },
  input: {
    flex: 1, // Hace que el input ocupe todo el espacio disponible
    marginRight: 10, // Agrega un margen entre el input y el botón
  },
  button: {
    paddingHorizontal: 10, // Ajusta el tamaño del botón
  },
});

export default SearchBar;
