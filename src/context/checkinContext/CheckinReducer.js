const CheckinReducer = (state, action) => {
	switch (action.type){
	  case "GET_CHECKINS_START":
      return {
        checkins: [],
        isFetching: true,
        error: false
      };
	  case "GET_CHECKINS_SUCCESS":
      return {
        checkins: action.payload,
        isFetching: false,
        error: false
      };
	  case "GET_CHECKINS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "CREATE_CHECKIN_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "CREATE_CHECKIN_SUCCESS":
      return {
        checkins: [...state.checkins, action.payload],
        isFetching: false,
        error: false
      };
    case "CREATE_CHECKIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "UPDATE_CHECKIN_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "UPDATE_CHECKIN_SUCCESS":
      return {
        checkins: action.payload,
        isFetching: false,
        error: false
      };
    case "UPDATE_CHECKIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "DELETE_CHECKIN_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "DELETE_CHECKIN_SUCCESS":
      return {
        checkins: state.checkins.filter((checkin) => checkin._id !== action.payload),
        isFetching: false,
        error: false
      };
    case "DELETE_CHECKIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return { ...state }
  }
}
  
export default CheckinReducer;