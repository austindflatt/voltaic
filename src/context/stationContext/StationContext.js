import StationReducer from './StationReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  stations: [],
  isFetching: false,
  error: false,
}

export const StationContext = createContext(INITIAL_STATE);

export const StationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StationReducer, INITIAL_STATE);
  return (
    <StationContext.Provider
      value={{ 
        stations: state.stations,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
      {children}
    </StationContext.Provider>
  )
}