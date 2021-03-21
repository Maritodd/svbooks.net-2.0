import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = (props) => {

    useEffect(() => {
        getMap();
    },)

    const key = props.store.key;

    let getMap = () => {
        mapboxgl.accessToken = key;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ -88.006016, 42.372587], // starting position [lng, lat]
            zoom: 16 // starting zoom
        });
        let marker = new mapboxgl.Marker({
            color: "#DC143C",
            draggable: true
        }).setLngLat([-88.006016, 42.372587])
            .addTo(map);
    };

        return (
            <div >
                <div className="map" id="map"></div>
            </div>
        )



}

export default Map;
