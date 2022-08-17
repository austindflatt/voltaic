import axios from 'axios';
import { 
  updateStationStart,
  updateStationSuccess,
  updateStationFailure,
  createStationStart,
  createStationSuccess,
  createStationFailure,
  deleteStationFailure, 
  deleteStationStart, 
  deleteStationSuccess, 
  getStationsFailure, 
  getStationsStart, 
  getStationsSuccess,
} from './StationActions';

// GET STATIONS
export const getStations = async (dispatch) => {
  dispatch(getStationsStart())
  try {
    const res = await axios.get(`${process.env.SERVER}/api/stations/`)
    dispatch(getStationsSuccess(res.data))
  } catch (error) {
    dispatch(getStationsFailure())
  }
}

// CREATE STATION
export const createStation = async (station, dispatch) => {
  dispatch(createStationStart())
  try {
    const res = await axios.post(`${process.env.SERVER}/api/stations/create`, station, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createStationSuccess(res.data))
  } catch (error) {
    dispatch(createStationFailure())
  }
}

// UPDATE STATION
export const updateStation = async (station, dispatch) => {
  dispatch(updateStationStart())
  try {
    const res = await axios.put(`${process.env.SERVER}/api/stations/update/${station.id}`, station, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateStationSuccess(res.data))
  } catch (error) {
    dispatch(updateStationFailure())
  }
}

// DELETE STATION
export const deleteStation = async (id, dispatch) => {
  dispatch(deleteStationStart())
  try {
    await axios.delete(`${process.env.SERVER}/api/stations/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteStationSuccess(id))
  } catch (error) {
    dispatch(deleteStationFailure())
  }
}