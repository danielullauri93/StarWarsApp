import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';

interface CardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

const Card = ({title, description, onPress}: CardProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, {backgroundColor: colors.surface}]}>
        <Text style={[styles.title, {color: colors.onSurface}]}>{title}</Text>
        <Text style={[styles.description, {color: colors.onSurface}]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
});

export default Card;
