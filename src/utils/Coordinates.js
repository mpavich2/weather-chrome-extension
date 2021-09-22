export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    distance = Math.acos(distance);
    distance = distance * 180 / Math.PI;
    distance = distance * 60 * 1.1515;
    distance = distance * 1.609344;

    return distance;
};

export const sortJsonArrayByClosestDistance = (jsonArray, coords) => {
    jsonArray.sort(function(a, b) {
        if (coords) {
            const originalLat = coords.latitude;
            const originalLon = coords.longitude;
            return calculateDistance(originalLat, originalLon, a.coord.lat, a.coord.lon) 
                - calculateDistance(originalLat, originalLon, b.coord.lat, b.coord.lon);
        }
        
        return 0;
    });
}