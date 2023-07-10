import { useEffect } from 'react';
import { useGeolocated } from "react-geolocated";

const Demo = ({ getCoords }) => {
    //@ts-ignore
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });


    useEffect(() => {
        if (coords) {
            getCoords(coords);
        }
    }, [coords]);

    return null
};

export default Demo;