import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = (props) => {

    mapboxgl.accessToken =  props.store.key;

    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [-88.006016, 42.372587],
            zoom: 16
        });

        let marker = new mapboxgl.Marker({
            color: "#DC143C",
            draggable: true
        }).setLngLat([-88.006016, 42.372587])
            .addTo(map);

        return () => map.remove();
    },[])

        return (
            <div >
                <div className="map" ref={mapContainer} />
            </div>
        )



}

export default Map;
