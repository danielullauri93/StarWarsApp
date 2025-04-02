import {Text as RNText, TextStyle} from 'react-native'; // Se importa `Text` de React Native y se renombra como `RNText`
import {useTheme} from 'react-native-paper';

interface TextProps {
  children: React.ReactNode; // `children` representa cualquier contenido dentro del componente (texto, otros componentes, etc.)
  style?: TextStyle; // Estilo opcional para el texto
}

// Definimos el componente de texto
const Text = ({children, style}: TextProps) => {
  const {colors} = useTheme(); // Extrae los colores del tema

  return <RNText style={[{color: colors.surface}, style]}>{children}</RNText>;
  // Renderiza el texto con color del tema y estilos opcionales
};

export default Text;
