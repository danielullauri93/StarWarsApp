import {TextInput, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const Input = ({
  placeholder,
  value,
  onChangeText,
  style,
  inputStyle: _inputStyle, // Se usa `_inputStyle` para evitar conflicto con `inputStyle` en `props`
}: InputProps) => {
  const {colors} = useTheme();

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[[styles.input, {borderColor: colors.primary}], style]}
      placeholderTextColor={colors.outline}
    />
  );
};

// Definimos los estilos del Input
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
});

export default Input;
