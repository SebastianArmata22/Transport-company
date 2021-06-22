import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{width: 20, height: 20, borderRadius: 50, backgroundColor: "#DD0000"}}>   </div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.073924222947504,
      lng: 19.990463813536984
    },
    zoom: 50
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApe2FBaBhEz63DqQ_6LnursU8rWPaUrtg" }}
          defaultCenter={
            {lat: 50.073924222947504,
            lng: 19.990463813536984}
          }
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={50.073924222947504} 
            lng={19.990463813536984}
            text="KKBus"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;