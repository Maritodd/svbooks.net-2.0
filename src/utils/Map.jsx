import React from 'react';
import GoogleMapReact from 'google-map-react';
// import * as axios from "axios";

const Marker = (props) => (
// const options = {
//     method: 'POST',
//     url: 'https://foursquareserg-osipchukv1.p.rapidapi.com/addCommentToCheckin',
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'x-rapidapi-key': 'ad4e0e2999msh69af940b0f5e58dp1f1cc1jsn5332ddfee0bb',
//         'x-rapidapi-host': 'Foursquareserg-osipchukV1.p.rapidapi.com'
//     },
//     data: {checkinId: 'undefined', accessToken: 'undefined'}
// };
//
// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

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
