import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = (props) => (
    <div className="pin"></div>
);

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 42.372146,
            lng: -88.005685
        },
        zoom: 16
    };
    state = this.props.store.key;
    render() {
        return (
            <div className="map" >
                <GoogleMapReact
                    bootstrapURLKeys={this.state}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker lat={42.372587}
                            lng={-88.006016}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
