'use client';
import { googleMapsAPI } from '@/helpers/googleMaps/constant';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

export default function Map({ faskes }) {
  const mapRef = useRef(null);
  useEffect(() => {
    if (faskes.length > 0) {
      const initMap = async () => {
        const loader = new Loader({
          apiKey: googleMapsAPI,
          version: "weekly",
        });

        const { Map: Mapsu } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        const position = {
          lat: -7.296667,
          lng: 112.7642,
        };

        const mapOptions = {
          center: position,
          zoom: 14,
          mapId: "c1543d75cc30d5d",
        };

        const map = new Mapsu(mapRef.current, mapOptions);
        faskes.forEach((element) => {
          const marker = new Marker({
            position: {
              lat: element.geolocation._lat,
              lng: element.geolocation._long,
            },
            icon: {
              url: element.type === 'rumah sakit' ? "https://maps.google.com/mapfiles/kml/paddle/H.png" : "https://maps.google.com/mapfiles/kml/paddle/P.png",
            },
            title: element.name.toUpperCase(),
            animation: google.maps.Animation.DROP,
            clickable: true,
            map: map,
          });
        });
      };

      initMap();
    }
  }, [faskes.length]);

  return (
    <div
      className="h-[70vh] w-full border-[5px] rounded-[50px] border-[#F17C84]"
      ref={mapRef}
    ></div>
  );
}
