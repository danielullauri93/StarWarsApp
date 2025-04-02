import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  FlatList,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getFilms, getPlanets, getPeople} from '../services/api';
import FilmList from '../components/organisms/FilmList';
import PlanetList from '../components/organisms/PlanetList';
import PeopleList from '../components/organisms/PeopleList';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App'; // Importa los tipos de rutas
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface HomeScreenProps {
  setIsDarkMode: (value: boolean) => void;
  isDarkMode: boolean;
}

// Define el tipo de navegación para HomeScreen
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({setIsDarkMode, isDarkMode}: HomeScreenProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Usa los tipos correctos
  const {colors} = useTheme();

  const {
    data: films,
    isLoading: isLoadingFilms,
    error: errorFilms,
  } = useQuery({queryKey: ['films'], queryFn: getFilms});

  //useQuery:
  // queryKey: ['films']: Identificador único para esta query. React Query usa esto para caching y re-fetching.
  // queryFn: getFilms: Función que ejecuta la petición HTTP para obtener películas.
  // Retorna:
  // data: Los datos obtenidos (en este caso, el array de películas)
  // isLoading: Booleano que indica si la petición está en curso
  // error: Objeto de error si la petición falla

  const {
    data: planets,
    isLoading: isLoadingPlanets,
    error: errorPlanets,
  } = useQuery({queryKey: ['planets'], queryFn: getPlanets});

  const {
    data: people,
    isLoading: isLoadingPeople,
    error: errorPeople,
  } = useQuery({queryKey: ['people'], queryFn: getPeople});

  if (isLoadingFilms || isLoadingPlanets || isLoadingPeople) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorFilms || errorPlanets || errorPeople) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error al cargar los datos</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={[]} // Lista vacía porque usamos header/footer
      keyExtractor={() => 'header'}
      renderItem={null}
      ListHeaderComponent={
        // Contenido superior (películas y planetas)
        <View>
          <Button
            title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            onPress={() => setIsDarkMode(!isDarkMode)}
          />
          <Button
            title="Buscar Personajes"
            onPress={() => navigation.navigate('Search')} // Navegar a SearchScreen
          />
          <Text style={[styles.sectionTitle, {color: colors.onSurface}]}>
            Películas
          </Text>
          <FilmList films={films || []} />
          <Text style={[styles.sectionTitle, {color: colors.onSurface}]}>
            Planetas
          </Text>
          <PlanetList planets={planets || []} />
        </View>
      }
      ListFooterComponent={
        // Contenido inferior (personajes)
        <View>
          <Text style={[styles.sectionTitle, {color: colors.onSurface}]}>
            Personajes
          </Text>
          <PeopleList people={people || []} />
        </View>
      }
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;
