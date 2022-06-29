import CheckinReducer from './CheckinReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  checkins: [],
  isFetching: false,
  error: false,
}

export const CheckinContext = createContext(INITIAL_STATE);

export const CheckinContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CheckinReducer, INITIAL_STATE);
  return (
    <CheckinContext.Provider
      value={{ 
        checkins: state.checkins,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
      {children}
    </CheckinContext.Provider>
  )
}