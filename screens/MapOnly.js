import MapView, { Marker, ProviderPropType } from "react-native-maps";
import React from "react";

import { StyleSheet, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = -34.610744;
const LONGITUDE = -58.382209;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class MapOnly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },

      markers: [
        {
          key: `Supermercado`,
          description: "Carrefour",
          coordinate: {
            latitude: -34.6078602,
            longitude: -58.383111
          },
          image: "https://i.ibb.co/C7h6LQs/Carrefour-Marker.png",
          rating: "\n4.8"
        },
        {
          key: `Supermercado`,
          description: "Wall Mart",
          coordinate: {
            latitude: -34.613715,
            longitude: -58.383183
          },
           image: "https://i.ibb.co/kHL8mZ1/Wallmart-Marker.png",
           rating: "\n4.1"
        },
        {
          key: `Supermercado`,
          description: "Supermercado Dia",
          coordinate: {
            latitude: -34.6152475,
            longitude: -58.3807038
          },
           image: "https://i.ibb.co/zFfc9yd/Dia-Marker.png",
           rating: "\n3.1"
        },
        {
          key: `Supermercado`,
          description: "Supermercado Dia%",
          coordinate: {
            latitude: -34.612600,
            longitude: -58.369021
          },
           image: "https://i.ibb.co/zFfc9yd/Dia-Marker.png",
           rating: "\n3.1"
        },
        {
          key: `Maxi Kiosco`,
          description: "Maxi Kiosco",
          coordinate: {
            latitude: -34.617063, 
            longitude: -58.377149
          },
           image: "https://i.ibb.co/Sdg5f9z/Kiosco-Marker.png",
           rating: "\n3.1"
        },
        {
          key: `Kiosco`,
          description: "Kiosco San Telmo",
          coordinate: {
            latitude: -34.615889, 
            longitude: -58.373901
          },
           image: "https://i.ibb.co/Sdg5f9z/Kiosco-Marker.png",
           rating: "\n3.1"
        },
        {
          key: `Kiosco`,
          description: "Kiosco Store de Reconquista",
          coordinate: {
            latitude: -34.604333, 
            longitude: -58.372535
          },
           image: "https://i.ibb.co/Sdg5f9z/Kiosco-Marker.png",
           rating: "\n2.8"
        },
        {
          key: `Kiosco`,
          description: "Kiosco Paraná 529",
          coordinate: {
            latitude: -34.602388, 
            longitude: -58.387901
          },
           image: "https://i.ibb.co/Sdg5f9z/Kiosco-Marker.png",
           rating: "\n3.1"
        }
      ]
    };
    //this.onRegionChange = this.onRegionChange.bind(this);
  }



  //   onRegionChange(region) {
  //     this.setState({ region });
  //   }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          //region={this.state.region}
          //onRegionChange={this.onRegionChange}
          provider={this.props.provider}
          style={styles.map}
        >
          {this.state.markers.map(marker => (
            <Marker
              title={marker.key}
              coordinate={marker.coordinate}
              //title={marker.title}
              description={marker.description}
              // description={marker.description + "\nCalificacion:" + marker.rating}
              //image={'https://image.flaticon.com/icons/png/512/1458/1458527.png'}
              image={marker.image}
              // custom_label: '<i class="map-icon-parking"></i>'
              
            />
          ))}
        </MapView>
      </View>
    );
  }
}

MapOnly.propTypes = {
  provider: ProviderPropType
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

export default MapOnly;
