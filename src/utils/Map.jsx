import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = (props) => {

    useEffect(() => {
        getMap();
    }, [])

    let getMap = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXRvZGQiLCJhIjoiY2tsZHN1emoyMDd1cjJ2cDBiNW92enZzYyJ9.t5rggHA3Tfoaa_Yjod7wAg';
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
