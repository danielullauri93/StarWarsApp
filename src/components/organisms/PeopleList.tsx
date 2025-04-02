import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Person} from '../../services/api'; // Tipo Person
import Card from '../molecules/Card';
import {useNavigation} from '@react-navigation/native'; // Hook para navegación
import {RootStackParamList} from '../../../App'; // Tipos de rutas
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; // Tipo de navegación
import {translatePerson} from '../../utils/translate'; // Función para traducir datos

// Define las propiedades (array de personajes)
interface PeopleListProps {
  people: Person[];
}

// Define el tipo de navegación (para TypeScript)

// NativeStackNavigationProp
// Es un tipo de TypeScript que define cómo funciona la navegación en tu app.
// Viene de @react-navigation/native-stack.

// RootStackParamList
// Es el "mapa de todas las pantallas" de tu app (definido en App.tsx).
type PeopleListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
  // Indica que este componente está asociado a la pantalla 'Home'.
  // Esto es necesario para el tipado, aunque la navegación ocurra hacia 'Detail'.
>;
// ¿Por qué se pone 'Home' si navegamos a 'Detail'?
// Porque este componente vive en la pantalla Home.
// El tipado dice: "Desde Home, puedo navegar a...".
// No afecta la navegación real, solo es para TypeScript.

const PeopleList: React.FC<PeopleListProps> = ({people}) => {
  const navigation = useNavigation<PeopleListNavigationProp>(); // Obtiene el objeto de navegación
  //   useNavigation es un hook que te da acceso al objeto de navegación.
  // El <PeopleListNavigationProp> le dice a TypeScript:
  // "navigation solo puede hacer lo que permita RootStackParamList".

  if (!people || people.length === 0) {
    return <Text>No hay personajes disponibles</Text>;
  }

  return (
    <View>
      {/* Mapea cada personaje a un TouchableOpacity (botón táctil) */}
      {people.map(person => (
        <TouchableOpacity
          key={person.name} // Clave única (nombre del personaje)
          onPress={
            () =>
              // Navega a la pantalla 'Detail' y pasa los datos del personaje traducidos
              navigation.navigate('Detail', {person: translatePerson(person)})
            // 'Detail' Nombre de la pantalla destino (definida en RootStackParamList).
            // { person: translatePerson(person) }
            // Los parámetros que se pasan a la pantalla Detail.
          }>
          {/* Renderiza un Card con los datos del personaje */}
          <Card
            title={person.name}
            description={`Altura: ${person.height}, Peso: ${person.mass}`}
            onPress={() =>
              navigation.navigate('Detail', {person: translatePerson(person)})
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PeopleList;
