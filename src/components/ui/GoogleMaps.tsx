'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary('maps');

            const locationInMap = {
                lat: 10.012451790093596,
                lng: 105.72985667484593
            };

            const { AdvancedMarkerElement } = (await loader.importLibrary(
                'marker'
            )) as typeof google.maps.marker;

            const options: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 15,
                mapId: 'NEXT_MAPS_TUTS',
            };

            const map = new Map(mapRef.current as HTMLDivElement, options);

            const marker = new AdvancedMarkerElement({
                map: map,
                position: locationInMap,
                title: 'Our Location',
            });
        };

        initializeMap();
    }, []);

    return <div className="h-[600px]" ref={mapRef} />;
}
