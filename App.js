import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import Weather from './Weather';

const API_KEY = 'API KEY를 입력하세요 ';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      this._getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      this.setState({
        error: error.message,
        temperature: null,
        name: null,
      });
    }
  };

  _getWeather = (lat, long) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: error.message,
          temperature: null,
          name: null,
        });
      });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {isLoaded ? (
          <Weather weatherName={name}  temp={Math.floor(temperature -273.15)}/>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
});

