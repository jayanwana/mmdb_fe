import React, {Component} from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const API_KEY = process.env.GMAP_API
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`+API_KEY

class Map extends Component {
  constructor(props) {
    super (props);
    this.state = {
      markets: null,
      selectedMarket: null,
    };
  }
  componentDidMount() {
    this.setState({ markets: this.props.markets })
  }
  render() {
    return(
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 6.524379, lng: 3.379206 }}
      >
        {this.state.markets && this.state.markets.slice(0, 5).map(market => (
          <Marker
            key={market.id}
            position={{
              lat: market.location.coordinates[0],
              lng: market.location.coordinates[1]
            }}
            onClick={() => {
              this.setState({selectedMarket: market});
            }}
          />
        ))}

        {this.state.selectedMarket && (
          <InfoWindow
            onCloseClick={() => {
              this.setState({selectedMarket: null});
            }}
            position={{
              lat: this.state.selectedMarket.location.coordinates[0],
              lng: this.state.selectedMarket.location.coordinates[1]
            }}
          >
            <div>
              <h2>{this.state.selectedMarket.name}</h2>
              <p>{this.state.selectedMarket.description}</p>
              <p>{this.state.selectedMarket.foodCategory}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    )
  }
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MarketMap(props) {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <MapWrapped
        markets={props.markets}
        googleMapURL={mapURL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
