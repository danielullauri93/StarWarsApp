import {DefaultTheme, MD3DarkTheme as DarkTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Color primario
    background: '#ffffff', // Fondo de la pantalla
    surface: '#ffffff', // Fondo de las tarjetas
    onSurface: '#000000', // Color del texto sobre el fondo
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc', // Color primario
    background: '#121212', // Fondo de la pantalla
    surface: '#1e1e1e', // Fondo de las tarjetas
    onSurface: '#ffffff', // Color del texto sobre el fondo
  },
};
