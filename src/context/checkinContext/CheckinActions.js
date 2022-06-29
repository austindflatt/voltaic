export const getCheckinsStart = () => ({
	type: 'GET_CHECKINS_START',
});

export const getCheckinsSuccess = (checkins) => ({
	type: 'GET_CHECKINS_SUCCESS',
	payload: checkins
});

export const getCheckinsFailure = () => ({
	type: 'GET_CHECKINS_FAILURE',
});

export const createCheckinStart = () => ({
	type: 'CREATE_CHECKIN_START',
});

export const createCheckinSuccess = (checkin) => ({
	type: 'CREATE_CHECKIN_SUCCESS',
	payload: checkin
});

export const createCheckinFailure = () => ({
	type: 'CREATE_CHECKIN_FAILURE',
});

export const updateCheckinStart = () => ({
	type: 'UPDATE_CHECKIN_START',
});

export const updateCheckinSuccess = (checkin) => ({
	type: 'UPDATE_CHECKIN_SUCCESS',
	payload: checkin
});

export const updateCheckinFailure = () => ({
	type: 'UPDATE_CHECKIN_FAILURE',
});

export const deleteCheckinStart = () => ({
	type: 'DELETE_CHECKIN_START',
});

export const deleteCheckinSuccess = (id) => ({
	type: 'DELETE_CHECKIN_SUCCESS',
	payload: id
});

export const deleteCheckinFailure = () => ({
	type: 'DELETE_CHECKIN_FAILURE',
});