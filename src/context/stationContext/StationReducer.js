const StationReducer = (state, action) => {
	switch (action.type){
	  case "GET_STATIONS_START":
      return {
        stations: [],
        isFetching: true,
        error: false
      };
	  case "GET_STATIONS_SUCCESS":
      return {
        stations: action.payload,
        isFetching: false,
        error: false
      };
	  case "GET_STATIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "CREATE_STATION_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "CREATE_STATION_SUCCESS":
      return {
        stations: action.payload,
        isFetching: false,
        error: false
      };
    case "CREATE_STATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "UPDATE_STATION_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "UPDATE_STATION_SUCCESS":
      return {
        stations: action.payload,
        isFetching: false,
        error: false
      };
    case "UPDATE_STATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "DELETE_STATION_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "DELETE_STATION_SUCCESS":
      return {
        stations: state.stations.filter((station) => station._id !== action.payload),
        isFetching: false,
        error: false
      };
    case "DELETE_STATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return { ...state }
  }
}
  
export default StationReducer;