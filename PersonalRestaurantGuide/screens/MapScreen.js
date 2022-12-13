import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = []

const MapScreen = () => {
    const[markers, setData] = React.useState(DATA);
    const[isLoading, setLoading] = React.useState(true);

    const getMarkers = async () => {
        try {
            const response = await fetch('https://personal-guide-restaurant.vercel.app//api/res/restaurants')
            const json = await response.json()
            setData(json)
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false)
        }
    }

    React.useEffect(()=>{getMarkers()}, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} 
            initialRegion={{
                latitude: 43.651070,
                longitude: -79.382633,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
                {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.coordinates}
                            title={marker.name}
                            description={marker.description}
                        >
                            <Image source={require('../assets/pin.png')} style={{height: 35, width:35 }} />
                        </Marker>
                        ))}
              </MapView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});