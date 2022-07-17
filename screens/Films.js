import {FlatList, Text, View} from 'react-native';
import Header from "../components/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import FilmItem from '../components/FilmItem'


export default function Films() {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params: {
            country: 'us',
            service: 'netflix',
            type: 'movie',
            genre: '18',
            page: '1',
            output_language: 'en',
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'f88e2a2b3dmsh12d11515e104f73p1b4a59jsn7c03aa17a06f',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    const [film, setFilm] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        axios.request(options).then(function (response) {
            setFilm(response.data.results)
        }).catch(function (error) {
            setError(error)
        });
    }, []);
// console.log(film)
    return (
        <View>
            <Header/>
            <FlatList
                columnWrapperStyle={{flex: 1, justifyContent:'space-around'}}
                numColumns={3}
                data={film}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <FilmItem
                       film={item}
                    />
                )}
            />
        </View>
    );
}

