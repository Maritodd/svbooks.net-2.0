import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ store }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = store.key;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [-88.006016, 42.372587],
            zoom: 16
        });

        const marker = new mapboxgl.Marker({
            color: "#DC143C",
            draggable: true
        })
            .setLngLat([-88.005674, 42.372163])
            .addTo(map);

        return () => map.remove();
    }, [store.key]);

    return (
        <div className="map-container">
            <div className="map" ref={mapContainer} />
        </div>
    );
};

export default Map;
