import axios from 'axios';

const API_BASE_URL = 'https://swapi.py4e.com/api/';

export interface Film {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  rotation_period?: string;
}

export interface Person {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  homeworld: string;
  films: string[];
}

const fetchData = async <T>(endpoint: string): Promise<T[]> => {
  try {
    const response = await axios.get<{results: T[]}>(
      `${API_BASE_URL}${endpoint}`,
    );
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Axios error in ${endpoint}:`, error.message);
    } else {
      console.error(`Unexpected error in ${endpoint}:`, error);
    }
    return [];
  }
};

export const getFilms = () => fetchData<Film>('films/');
export const getPlanets = () => fetchData<Planet>('planets/');
export const getPeople = () => fetchData<Person>('people/');
export const searchPeople = (query: string) =>
  fetchData<Person>(`people/?search=${query}`);
