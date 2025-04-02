import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Film} from '../../services/api'; // Importa el tipo Film
import Card from '../molecules/Card'; // Importa el componente Card

// Define las propiedades que recibe el componente (en este caso, un array de películas)
interface FilmListProps {
  films: Film[];
}

// Declara el componente funcional FilmList
const FilmList: React.FC<FilmListProps> = ({films}) => {
  // Si no hay películas o el array está vacío, muestra un mensaje
  if (!films || films.length === 0) {
    return <Text>No hay películas disponibles</Text>;
  }

  return (
    <View style={styles.container}>
      {/* FlatList: Componente optimizado para listas grandes */}
      <FlatList
        data={films} // Los datos a renderizar (array de películas)
        keyExtractor={item => item.title} // Extrae una clave única de cada item (el título)
        renderItem={(
          {item}, // Renderiza cada película como un Card
        ) => (
          <Card
            title={item.title} // Título de la película
            description={`Director: ${item.director}, Fecha: ${item.release_date}`}
          />
        )}
      />
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    marginBottom: 16, // Margen inferior de 16 unidades
  },
});

export default FilmList;

// ¿Qué hace cada parte?
// <FlatList>:

// data={films} → Toma el array de películas y las renderiza eficientemente (solo muestra las que están en pantalla).

// keyExtractor → Cada item en React necesita una clave única. Aquí usamos el título de la película.

// renderItem → Define cómo se ve cada película. En este caso, un Card con título y descripción.

// <Card>:

// Muestra una tarjeta con el título (item.title) y una descripción formateada.

// StyleSheet:

// flex: 1 → Hace que el contenedor ocupe todo el espacio vertical disponible.
