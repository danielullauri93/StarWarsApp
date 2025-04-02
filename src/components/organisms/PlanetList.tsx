import React from 'react';
import {View, Text} from 'react-native';
import {Planet} from '../../services/api'; // Tipo Planet
import Card from '../molecules/Card'; // Componente Card

// Define las propiedades (array de planetas)
interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({planets}) => {
  if (!planets || planets.length === 0) {
    return <Text>No hay planetas disponibles</Text>;
  }

  return (
    <View>
      {/* Mapea cada planeta a un Card */}
      {planets.map(planet => (
        <Card
          key={planet.name} // Clave única (nombre del planeta)
          title={planet.name}
          description={`Clima: ${planet.climate}, Terreno: ${planet.terrain}`}
        />
      ))}
    </View>
  );
};

export default PlanetList;
