// Weather.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from "prop-types";

const weatherCases = {
    rain: {
        colors:['#00C6FB', "#005BEA"],
        title: "날씨 : 비",
        subtitle: "꼭 우산을 챙기세요!",
        icon : "ios-rainy",
    },
    Clear: {
        colors:['#FEF253', "#FF7300"],
        title: "날씨 : 맑음",
        subtitle: "야외 활동하기 좋은 날입니다.",
        icon : "ios-sunny",
    },
    Thunderstorm: {
        colors:['#00ECBC', "#007ADF"],
        title: "날씨 : 뇌우",
        subtitle: "야외 활동을 삼가해주세요.",
        icon : "ios-thunderstorm",
    },
    Clouds: {
        colors:['#D7D2CC', "#304352"],
        title: "날씨 : 구름 많음",
        subtitle: "장시간 야외활동은 삼가해주세요.",
        icon : "ios-cloud",
    },
    snow: {
        colors:['#7DE2FC', "#B9B6E5"],
        title: "날씨 : 눈",
        subtitle: "눈사람 만들기 좋은 날입니다.",
        icon : "ios-snow",
    }, 
   Drizzle: {
        colors:['#79F7FE', "#66A6FF"],
        title: "날씨 : 이슬비",
        subtitle: "우산을 챙기세요!",
        icon : "ios-rainy-outline",
    },
    Haze: {
        colors:['#79F7FE', "#66A6FF"],
        title: "날씨 : 안개",
        subtitle: "운전을 하신다면 전방을 조심!",
        icon : "ios-rainy-outline",
    },
    Fewcloulds: {
      colors:['#79F7FE', "#66A6FF"],
      title: "날씨 : 구름조금",
      subtitle: "적당하게 야외활동하기 좋습니다.!",
      icon : "ios-cloud-outline",
  },
  mist: {
    colors: ['#79F7FE', '#66A6FF'],
    title: '날씨: 안개',
    subtitle: '운전 시 시야에 주의하세요!',
    icon: 'ios-cloud-outline',
  },
  smoke: {
    colors: ['#79F7FE', '#66A6FF'],
    title: '날씨: 연기',
    subtitle: '외출 시 마스크를 착용하세요!',
    icon: 'ios-cloud-outline',
  },
  dust: {
    colors: ['#79F7FE', '#66A6FF'],
    title: '날씨: 미세먼지',
    subtitle: '외출 시 마스크를 착용하세요!',
    icon: 'ios-cloud-outline',
  },
  fog: {
    colors: ['#79F7FE', '#66A6FF'],
    title: '날씨: 안개',
    subtitle: '운전 시 시야에 주의하세요!',
    icon: 'ios-cloud-outline',
  },
    
}


function Weather({ weatherName, temp }) {
    console.log(weatherName);
    
  return (
    <LinearGradient colors={weatherCases[weatherName].colors}
     style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
