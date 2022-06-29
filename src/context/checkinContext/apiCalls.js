import axios from 'axios';
import { 
  updateCheckinStart,
  updateCheckinSuccess,
  updateCheckinFailure,
  createCheckinStart,
  createCheckinSuccess,
  createCheckinFailure,
  deleteCheckinFailure, 
  deleteCheckinStart, 
  deleteCheckinSuccess, 
  getCheckinsFailure, 
  getCheckinsStart, 
  getCheckinsSuccess 
} from './CheckinActions';

// GET CHECK INS
export const getCheckins = async (dispatch) => {
  dispatch(getCheckinsStart())
  try {
    const res = await axios.get('http://localhost:3001/api/checkins/')
    dispatch(getCheckinsSuccess(res.data))
  } catch (error) {
    dispatch(getCheckinsFailure())
  }
}

// CREATE CHECK IN
export const createCheckin = async (checkin, dispatch) => {
  dispatch(createCheckinStart())
  try {
    const res = await axios.post(`http://localhost:3001/api/checkins/create`, checkin, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createCheckinSuccess(res.data))
  } catch (error) {
    dispatch(createCheckinFailure())
  }
}

// UPDATE CHECK IN
export const updateCheckin = async (checkin, dispatch) => {
  dispatch(updateCheckinStart())
  try {
    const res = await axios.put(`http://localhost:3001/api/checkins/update/${checkin.id}`, checkin, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateCheckinSuccess(res.data))
  } catch (error) {
    dispatch(updateCheckinFailure())
  }
}

// DELETE CHECK IN
export const deleteCheckin = async (id, dispatch) => {
  dispatch(deleteCheckinStart())
  try {
    await axios.delete(`http://localhost:3001/api/checkins/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteCheckinSuccess(id))
  } catch (error) {
    dispatch(deleteCheckinFailure())
  }
}