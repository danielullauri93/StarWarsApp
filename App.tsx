import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';
import {lightTheme, darkTheme} from './src/styles/theme';

// Define los tipos de las rutas
export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Detail: {person: any}; // Ajusta el tipo de "person" según sea necesario
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // Usa los tipos definidos
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home">
                {props => (
                  <HomeScreen
                    {...props}
                    setIsDarkMode={setIsDarkMode}
                    isDarkMode={isDarkMode}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
