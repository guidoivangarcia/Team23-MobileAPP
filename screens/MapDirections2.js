import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = -34.610744;
const LONGITUDE = -58.382209;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "AIzaSyCmA7X5RujLzQm_saketFC4AL2ZtCzEJxU";

class MapDirections2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // latitude: -34.6078602,
      // longitude: -58.383111
      latitude: null,
      longitude: null,
      error: null,
      coordinates: [
        {
          //UADE
          latitude: -34.6170941,
          longitude: -58.3820478
        },
        {

          latitude: -34.612600,
          longitude: -58.369021
        },
      ],
      markers: [
        {
          key: `Supermercado`,
          description: "Carrefour",
          coordinate: {
            latitude: -34.6078602,
            longitude: -58.383111
          },
          image: "https://i.ibb.co/C7h6LQs/Carrefour-Marker.png"
        },
        {
          key: `Supermercado`,
          description: "Wall Mart",
          coordinate: {
            latitude: -34.613715,
            longitude: -58.383183
          },
           image: "https://i.ibb.co/kHL8mZ1/Wallmart-Marker.png"
        }]
    };

    this.mapView = null;
  }

  //obtengo la ubicacion mia actual
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("wokeeey");
        console.log(position);
        this.setState({
          latitude: position.latitude,
          longitude: position.longitude,
          error: null
        });
        //this.mergeLot();
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate]
    });
  };

  render() {
    
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        style={StyleSheet.absoluteFill}
        ref={c => (this.mapView = c)}
        onPress={this.onMapPress}
      >
        {/* crea un marcador en el map donde esta mi ubicacion actual */}
        {!!this.state.latitude && !!this.state.longitude && (
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            title={"Su Ubicacion"}
            
          />
        )}

        {/* Genero los dos marcadores en el mapa */}
        {this.state.coordinates.map((coordinate, index) => (
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} image={'https://i.ibb.co/t8M2sdX/Marker.png'}/>
        ))}
        {this.state.coordinates.length >= 2 && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={
              this.state.coordinates.length > 2
                ? this.state.coordinates.slice(1, -1)
                : null
            }
            destination={
              this.state.coordinates[this.state.coordinates.length - 1]
            }
            mode="WALKING"
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={8}
            strokeColor="navy"
            optimizeWaypoints={true}
            onStart={params => {
              console.log(
                `Ruta iniciada entre "${params.origin}" y "${params.destination}"`
              );
            }}
            onReady={result => {
              console.log("Distance: ${result.distance} km");
              console.log("Duration: ${result.duration} min.");

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20
                }
              });
            }}
            onError={errorMessage => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    );
  }
}

export default MapDirections2;
