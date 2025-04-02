import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.primary}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: colors.surface}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
