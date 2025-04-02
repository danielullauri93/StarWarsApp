import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

interface DetailScreenProps {
  // route.params.person
  // Es el paquete de datos que recibió al navegar aquí
  route: {
    params: {
      person: {
        // ¡Esto es como el modelo de datos!
        nombre: string; // Nombre del tripulante
        altura: string; // Altura en cm
        peso: string; // Peso en kg
        color_de_piel: string; // Tipo: "claro", "oscuro", etc.
        color_de_cabello: string;
        color_de_ojos: string;
        año_de_nacimiento: string; // Formato: "19BBY" (Star Wars)
        género: string; // "masculino", "femenino", etc.
      };
    };
  };
}
// Recibe datos: esta pantalla obtiene un objeto person con detalles de un personaje.
// Muestra información: Como un panel de control, despliega cada dato en pantalla.

const DetailScreen = ({route}: DetailScreenProps) => {
  const {person} = route.params;
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.onSurface}]}>
        {person.nombre}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Altura: {person.altura}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Peso: {person.peso}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Color de piel: {person.color_de_piel}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Color de cabello: {person.color_de_cabello}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Color de ojos: {person.color_de_ojos}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Año de nacimiento: {person.año_de_nacimiento}
      </Text>
      <Text style={[styles.text, {color: colors.onSurface}]}>
        Género: {person.género}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailScreen;
