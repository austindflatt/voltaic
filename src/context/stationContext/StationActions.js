export const getStationsStart = () => ({
	type: 'GET_STATIONS_START',
});

export const getStationsSuccess = (stations) => ({
	type: 'GET_STATIONS_SUCCESS',
	payload: stations
});

export const getStationsFailure = () => ({
	type: 'GET_STATIONS_FAILURE',
});

export const createStationStart = () => ({
	type: 'CREATE_STATION_START',
});

export const createStationSuccess = (station) => ({
	type: 'CREATE_STATION_SUCCESS',
	payload: station
});

export const createStationFailure = () => ({
	type: 'CREATE_STATION_FAILURE',
});

export const updateStationStart = () => ({
	type: 'UPDATE_STATION_START',
});

export const updateStationSuccess = (station) => ({
	type: 'UPDATE_STATION_SUCCESS',
	payload: station
});

export const updateStationFailure = () => ({
	type: 'UPDATE_STATION_FAILURE',
});

export const deleteStationStart = () => ({
	type: 'DELETE_STATION_START',
});

export const deleteStationSuccess = (id) => ({
	type: 'DELETE_STATION_SUCCESS',
	payload: id
});

export const deleteStationFailure = () => ({
	type: 'DELETE_STATION_FAILURE',
});