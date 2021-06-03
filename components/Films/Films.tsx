import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {ObjectId} from "mongodb";

import styles from './styles';
import axios from "axios";

const url = "http://localhost:5000/films";


interface IFilm {
    id: ObjectId;
    title: string;
    year: string;
    format: string;
    start: string;

}
const defaultFilms:IFilm[] = [];

const Films = () => {
    const [films, setFilms]: [IFilm[], (films:IFilm[]) => void] = React.useState(defaultFilms);
    React.useEffect(()=> {
        axios.get<IFilm[]>(url)
        .then(response => {
            setFilms(response.data);
        })
        .catch(error => console.log(error))
    }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        List of films
      </Text>
      {console.log(films)}
      <ScrollView>
          {films.map((film) => (
            <li>
                <h3>{film.title}</h3>
            </li>
          ))}
      </ScrollView>
    </View>
  );
}

export default Films;
