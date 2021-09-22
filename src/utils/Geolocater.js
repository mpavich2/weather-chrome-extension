export function geolocateCityName() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const key = process.env.REACT_APP_GEOLOCATOR_API_KEY;
            const geoApiUrl = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${latitude}&lon=${longitude}&format=json`;

            fetch(geoApiUrl)
                .then(response => response.json())
                .then(data => {
                    if (!data.address.city) {
                        res(data.address.town);
                    } else {
                        res(data.address.city);
                    }
                });
            },
            err => rej(err)
        );
    });
}

export function geolocateCoordinates() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const coordinates = {
                latitude: latitude,
                longitude: longitude
            }
            res(coordinates);
        },
            err => rej(err)
        );
    });
}